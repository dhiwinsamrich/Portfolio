import { useState, useEffect } from "react";
import { ContributionData } from "../components/ui/contribution-graph";

interface GitHubGraphQLResponse {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              date: string;
              contributionCount: number;
            }>;
          }>;
        };
      };
    };
  };
  errors?: Array<{
    message: string;
    type?: string;
    path?: string[];
  }>;
}

interface FallbackResponse {
  contributions: Array<{
    date: string;
    count: number;
  }>;
}

// Helper function to map contribution count to level (0-4)
function getContributionLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 10) return 3;
  return 4;
}

// Helper function to generate contribution data for a year
function generateContributions(
  contributionMap: Map<string, number>,
  targetYear: number
): ContributionData[] {
  const contributions: ContributionData[] = [];
  const start = new Date(targetYear, 0, 1);
  const end = new Date(targetYear, 11, 31);

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split("T")[0];
    const count = contributionMap.get(dateString) || 0;

    contributions.push({
      date: dateString,
      count,
      level: getContributionLevel(count),
    });
  }

  return contributions;
}

// Fetch from GitHub GraphQL API
async function fetchFromGraphQL(
  username: string,
  targetYear: number
): Promise<ContributionData[]> {
  const fromDate = `${targetYear}-01-01T00:00:00Z`;
  const toDate = `${targetYear}-12-31T23:59:59Z`;
  const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
  const token = process.env.REACT_APP_GITHUB_TOKEN || "";
  
  // Debug: Check if token is loaded (without exposing it)
  if (token) {
    console.log("GitHub token detected - using authenticated API");
  } else {
    console.warn("No GitHub token found - using unauthenticated API (may have rate limits)");
  }

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables: {
        username,
        from: fromDate,
        to: toDate,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("GraphQL API request failed");
  }

  const json: GitHubGraphQLResponse = await response.json();

  // Check for GraphQL errors
  if (json.errors) {
    const errorMessage = json.errors[0]?.message || "GitHub API error";
    console.error("GitHub GraphQL API errors:", json.errors);
    throw new Error(errorMessage);
  }

  if (!json.data?.user?.contributionsCollection) {
    // Check if user exists
    if (!json.data?.user) {
      throw new Error(`GitHub user "${username}" not found. Please check the username.`);
    }
    throw new Error("Invalid response from GitHub API");
  }

  const calendar = json.data.user.contributionsCollection.contributionCalendar;
  const contributionMap = new Map<string, number>();

  calendar.weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      contributionMap.set(day.date, day.contributionCount);
    });
  });

  return generateContributions(contributionMap, targetYear);
}

// Fallback: Fetch from public API
async function fetchFromFallback(
  username: string,
  targetYear: number
): Promise<ContributionData[]> {
  // Try multiple fallback APIs for better reliability
  const fallbackApis = [
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${targetYear}`,
    `https://github-contributions.vercel.app/api/v1/${username}?y=${targetYear}`,
  ];

  for (const apiUrl of fallbackApis) {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        continue; // Try next API
      }

      const json: FallbackResponse = await response.json();
      const contributionMap = new Map<string, number>();

      if (json.contributions && Array.isArray(json.contributions)) {
        json.contributions.forEach((contribution) => {
          contributionMap.set(contribution.date, contribution.count);
        });
        return generateContributions(contributionMap, targetYear);
      }
    } catch (error) {
      console.warn(`Fallback API ${apiUrl} failed:`, error);
      continue; // Try next API
    }
  }

  throw new Error(`All fallback APIs failed for username: ${username}. Please verify your GitHub username is correct.`);
}

export function useGitHubContributions(username: string, year?: number) {
  const [data, setData] = useState<ContributionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);

        const targetYear = year || new Date().getFullYear();

        // Try GitHub GraphQL API first, fallback to public API if it fails
        let contributions: ContributionData[];
        try {
          contributions = await fetchFromGraphQL(username, targetYear);
          console.log(`Successfully fetched ${contributions.length} contributions from GitHub GraphQL API`);
        } catch (graphQLError) {
          console.warn("GraphQL API failed, trying fallback API:", graphQLError);
          try {
            contributions = await fetchFromFallback(username, targetYear);
            console.log(`Successfully fetched ${contributions.length} contributions from fallback API`);
          } catch (fallbackError) {
            console.error("Both APIs failed:", fallbackError);
            throw fallbackError;
          }
        }
        setData(contributions);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch contributions";
        setError(errorMessage);
        console.error("Error fetching GitHub contributions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, year]);

  return { data, loading, error };
}


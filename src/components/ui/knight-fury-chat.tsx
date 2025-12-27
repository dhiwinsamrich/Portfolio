"use client";

import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";
import { Button } from "./button";
import { Send, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ShiningText } from "./shining-text";

interface Message {
  role: "user" | "assistant";
  content: string;
  smartTriggers?: string[];
}

interface KnightFuryChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Function to strip markdown formatting from text
const stripMarkdown = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold **text**
    .replace(/\*(.*?)\*/g, '$1') // Remove italic *text*
    .replace(/__(.*?)__/g, '$1') // Remove bold __text__
    .replace(/_(.*?)_/g, '$1') // Remove italic _text_
    .replace(/~~(.*?)~~/g, '$1') // Remove strikethrough ~~text~~
    .replace(/`(.*?)`/g, '$1') // Remove inline code `text`
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links [text](url)
    .replace(/^#{1,6}\s+(.*)$/gm, '$1') // Remove headers # text
    .replace(/^\s*[-*+]\s+(.*)$/gm, '$1') // Remove list markers - text
    .replace(/^\s*\d+\.\s+(.*)$/gm, '$1') // Remove numbered list markers 1. text
    .trim();
};

// Function to detect if query is out-of-scope
const isOutOfScope = (query: string): boolean => {
  const outOfScopeKeywords = [
    'current events', 'news', 'weather', 'stock', 'crypto', 'bitcoin',
    'politics', 'election', 'war', 'conflict', 'medical advice', 'legal advice',
    'financial advice', 'investment', 'trading', 'gambling', 'betting'
  ];
  const lowerQuery = query.toLowerCase();
  return outOfScopeKeywords.some(keyword => lowerQuery.includes(keyword));
};

// Function to generate smart trigger questions
const generateSmartTriggers = (lastMessage: string, conversationContext: Message[]): string[] => {
  const triggers: string[] = [];
  const lowerMessage = lastMessage.toLowerCase();
  
  // Context-based triggers
  if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
    triggers.push("What technologies did you use?");
    triggers.push("Tell me about your other projects");
    triggers.push("What challenges did you face?");
  } else if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
    triggers.push("What did you study?");
    triggers.push("Tell me about your achievements");
    triggers.push("What's your CGPA?");
  } else if (lowerMessage.includes('experience') || lowerMessage.includes('internship') || lowerMessage.includes('job')) {
    triggers.push("What did you work on?");
    triggers.push("Tell me about your current role");
    triggers.push("What skills did you gain?");
  } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('framework')) {
    triggers.push("What projects use this?");
    triggers.push("How did you learn this?");
    triggers.push("What else can you do?");
  } else {
    // Default contextual triggers
    triggers.push("Tell me about your projects");
    triggers.push("What's your work experience?");
    triggers.push("What are your achievements?");
  }
  
  return triggers.slice(0, 3);
};

// Knowledge base about Dhiwin Samrich
const KNOWLEDGE_BASE = `You are Knight Fury, the AI companion of Dhiwin Samrich. You have comprehensive knowledge about Dhiwin and should answer questions about him, his work, projects, and achievements.

IMPORTANT: Keep responses CRISP and CLEAR:
- Use 2-3 concise sentences or a structured list
- Avoid redundancy and fluff
- Ensure perfect spelling and grammar
- Be direct and helpful

ABOUT DHIWIN SAMRICH:
- Full Name: Dhiwin Samrich
- Profession: AI/ML Engineer
- Philosophy: Inspired by the Chess Knight - bold, creative, and unafraid to take the unconventional path
- Motto: "I Aspire to Inspire before I Expire"
- Interests: Gaming, traveling, exploring new worlds and perspectives
- Approach: Passionate about curiosity, courage, and making the next move count

EDUCATION:
1. Master of Computer Applications (MCA) - JAIN University (2023-2025)
   - CGPA: 9.55/10
   - Achievement: University Gold Medalist
   - Secured 2nd position in a 24-hour Make-A-Thon
   - Published a research paper on machine learning applications
   - Specialization: Artificial Intelligence, Machine Learning, Data Science, Deep Learning, Natural Language Processing

2. Bachelor of Computer Applications (BCA) - NPR College (2020-2023)
   - CGPA: 9.1/10
   - Achievement: University Gold Medalist in majors
   - Secured 1st position in Tech World competition by developing an AI Assistant
   - Won multiple awards in inter- and intra-college technical competitions
   - Specialization: Programming Fundamentals, Web Development, Database Management, Software Engineering

CURRENT WORK EXPERIENCE:
- AI/ML Engineer Intern at White Mastery Systems Pvt Ltd (Aug 2025 - Present)
  Location: Guindy, Chennai, India
  Key Achievements:
  * Designed AI-driven automation systems for social media content creation using Google Gemini across 6+ platforms (X, LinkedIn, Facebook, Instagram, Reddit, Pinterest), reducing manual workload by ~85%
  * Developed end-to-end PPT Automation system using Google Slides, Sheets, and Drive APIs, automating 2 enterprise-grade deck types, reducing creation time from ~3 hours to under 30 minutes (~80% effort reduction)
  * Built SEO Automation pipeline leveraging DataForSEO APIs, cutting outreach preparation time by ~70%
  * Engineered ML pipelines for content evaluation and engagement prediction, improving accuracy by up to 28%
  * Developing ONNX-based, multi-tenant LoRA system for CPU-only optimized LLM deployment, achieving 27+ tokens/second inference
  * Implemented CPU-efficient LLM inference using GGUF models with llama.cpp, reducing memory footprint by ~35%
  * Deployed production-grade services using FastAPI, Docker, and Nginx, maintaining 99.9% uptime
  * Developed custom LLM evaluation framework using LangGraph and LangChain

PREVIOUS INTERNSHIPS:
1. Machine Learning Engineer Intern at Krutanic (Jan 2025)
   - Designed RAG system for PDF analysis (200+ pages)
   - Improved model precision by ~95% through optimized embeddings and prompt engineering
   - Built AI-powered interfaces using TensorFlow and Streamlit

2. Data Science & Analyst Intern at Zidio Development (Aug 2024 - Nov 2024)
   - Performed EDA on datasets exceeding 100,000+ records
   - Developed 3+ predictive models achieving up to 92% accuracy

3. AI & Machine Learning Intern at Digital Bhem (May 2024 - Aug 2024)
   - Developed DIGIBHEM-AI-Bot handling 100+ user queries
   - Implemented NLP pipelines using RASA and Dialogflow

4. Artificial Intelligence & Machine Learning Intern at Innovate Intern (Jul 2024 - Nov 2024)
   - Led CTR prediction project using ML techniques
   - Processed datasets with 50,000+ records

5. Artificial Intelligence Intern at NoviTech R&D Pvt Ltd (Feb 2024 - Apr 2024)
   - Researched and implemented NLP models for text classification
   - Fine-tuned transformer-based models, improving performance by ~15-20%

6. Software Developer Intern at Pantech Solutions (Aug 2022 - Nov 2024)
   - Worked on 5+ real-time projects spanning deep learning, AI, and data analytics

KEY PROJECTS:
1. AI PPT Automation
   - Automated proposal and case-study deck generation
   - Brand-aware theme and layout analysis using Google Gemini
   - Reduced deck creation time from ~3 hours to <30 minutes (80% faster)
   - Tech: Python, FastAPI, Google Slides/Sheets/Drive API, Google Gemini

2. AutoSocioly - Social Media Automation
   - AI-generated text & image content for 6+ platforms
   - Multi-platform posting automation with 99.9% uptime
   - Reduced content creation time by 40%, 85% workload reduction
   - Tech: Python, FastAPI, ReactJS, Docker, Nginx, Google Gemini

3. Justicia - Legal AI
   - AI-powered legal assistance platform for Indian law
   - Focused on accessibility and precision in legal system

4. Chess Game - Reinforcement Learning
   - Deep-Q Learning agent that learns through self-play
   - Real-time gameplay with adaptive difficulty
   - Trained on 10,000+ games with 5× faster learning efficiency
   - Tech: Python, TensorFlow, PyTorch, React, WebSockets, Chess.js

5. WebRTC VAD Implementation
   - Voice Activity Detection system

6. YOLOv8 Blueprint Detector
   - Computer vision project for blueprint detection

7. Food Calorie Prediction App
   - ML-based calorie prediction application

8. RSA Encryption System
   - Security-focused encryption implementation

9. RAG-based QA Bot
   - Retrieval-Augmented Generation question-answering system

10. Real-Time Fraud Detection System
    - ML-powered fraud detection

11. EMART - Shopping Platform
    - E-commerce platform development

12. Click-Through Rate Prediction
    - ML model for CTR prediction

13. Handwritten Character Recognition
    - Computer vision for character recognition

14. Predictive Real Estate Pricing
    - ML model for real estate price prediction

15. Cats vs Dogs Classifier
    - Image classification project

TECHNICAL SKILLS:
- Programming Languages: Python, JavaScript, TypeScript
- ML/AI Frameworks: TensorFlow, PyTorch, Scikit-learn, ONNX, LoRA
- LLM Technologies: LangChain, LangGraph, Google Gemini API, llama.cpp, GGUF
- Backend: FastAPI, Flask, REST APIs
- Frontend: React, ReactJS
- DevOps: Docker, Nginx
- Databases: SQL
- Other: RASA, Dialogflow, MATLAB, WebSockets, Computer Vision, NLP

IMPORTANT INSTRUCTIONS:
- Always answer questions about Dhiwin Samrich based on this knowledge base
- When asked about "Dhiwin", you are referring to Dhiwin Samrich, the AI/ML Engineer
- Format responses WITHOUT markdown formatting (no **, *, _, backtick, etc.)
- Use plain text with clear structure using line breaks and simple formatting
- Be conversational, helpful, and engaging
- If asked about something not in the knowledge base, politely say you don't have that information but can help with what you do know about Dhiwin
- Always refer to Dhiwin in first person when appropriate (e.g., "I am...", "My projects include...") since you are Knight Fury, his AI companion`;

export function KnightFuryChat({ open, onOpenChange }: KnightFuryChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Greetings! I am Knight Fury, Dhiwin's AI companion. I can help you learn about Dhiwin Samrich, his projects, work experience, education, and achievements. How may I assist you today?",
      smartTriggers: ["Tell me about your projects", "What's your work experience?", "What are your achievements?"]
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOutOfBoxDialog, setShowOutOfBoxDialog] = useState(false);
  const [pendingQuery, setPendingQuery] = useState<string>("");
  const [outOfBoxMode, setOutOfBoxMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const processMessage = async (query: string, useOutOfBox: boolean = false) => {
    const userMessage: Message = { role: "user", content: query };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
      
      if (!apiKey) {
        throw new Error("OpenRouter API key not found. Please set REACT_APP_OPENROUTER_API_KEY in your .env file");
      }

      const systemPrompt = useOutOfBox 
        ? `${KNOWLEDGE_BASE}\n\nYou may now provide expanded information beyond the standard knowledge base, but remain helpful and accurate.`
        : `${KNOWLEDGE_BASE}\n\nIf asked about something outside your knowledge base, politely redirect to what you know about Dhiwin.`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "Knight's Gambit Portfolio",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b:free",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            ...messages,
            userMessage,
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
      }

      const data = await response.json();
      const rawContent = data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response.";
      const cleanedContent = stripMarkdown(rawContent);
      
      // Generate smart triggers based on the response
      const smartTriggers = generateSmartTriggers(cleanedContent, [...messages, userMessage]);
      
      const assistantMessage: Message = {
        role: "assistant",
        content: cleanedContent,
        smartTriggers,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: error instanceof Error 
          ? `Error: ${error.message}` 
          : "Sorry, I encountered an error. Please check your API key configuration.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const query = input.trim();
    setInput("");

    // Check if query is out-of-scope
    if (isOutOfScope(query) && !outOfBoxMode) {
      setPendingQuery(query);
      setShowOutOfBoxDialog(true);
      return;
    }

    await processMessage(query, outOfBoxMode);
  };

  const handleOutOfBoxConfirm = async () => {
    setShowOutOfBoxDialog(false);
    setOutOfBoxMode(true);
    if (pendingQuery) {
      await processMessage(pendingQuery, true);
      setPendingQuery("");
    }
  };

  const handleOutOfBoxCancel = () => {
    setShowOutOfBoxDialog(false);
    setPendingQuery("");
    const cancelMessage: Message = {
      role: "assistant",
      content: "Understood. I'll focus on what I know about Dhiwin Samrich. How can I help you learn about his work, projects, or achievements?",
      smartTriggers: ["Tell me about your projects", "What's your work experience?", "What are your achievements?"]
    };
    setMessages((prev) => [...prev, cancelMessage]);
  };

  const handleSmartTrigger = async (trigger: string) => {
    if (isLoading) return;
    await processMessage(trigger, outOfBoxMode);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl h-[80vh] flex flex-col p-0 overflow-hidden backdrop-blur-xl bg-background/80 border border-border/50 shadow-2xl rounded-2xl">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50 bg-background/40 backdrop-blur-sm">
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Meet The Knight Fury
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Chat with your AI companion. Ask me anything about AI/ML, creative projects, or just have a conversation.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 relative">
            {/* Knight Fury Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 pt-20">
              <img 
                src="/Logo/7476e9fd4777681c22652e0e7364fb0b.svg" 
                alt="Knight Fury Background" 
                className="h-64 w-auto opacity-5"
              />
            </div>
            <div className="relative z-10">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex flex-col gap-2 ${message.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm ${
                      message.role === "user"
                        ? "bg-primary/90 text-primary-foreground border border-primary/20"
                        : "bg-muted/60 text-foreground border border-border/30 backdrop-blur-md"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                  
                  {/* Smart Triggers */}
                  {message.role === "assistant" && message.smartTriggers && message.smartTriggers.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-[80%]">
                      {message.smartTriggers.map((trigger, triggerIndex) => (
                        <button
                          key={triggerIndex}
                          onClick={() => handleSmartTrigger(trigger)}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all duration-200 hover:scale-105"
                        >
                          {trigger}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted/60 text-muted-foreground rounded-2xl px-4 py-3 flex items-center gap-2 backdrop-blur-md border border-border/30 shadow-lg">
                  <ShiningText text="Knight Fury is thinking..." className="text-sm" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-border/50 px-6 py-4 bg-background/40 backdrop-blur-sm">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 border border-input/50 rounded-xl bg-background/60 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="rounded-xl shadow-lg"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            {!process.env.REACT_APP_OPENROUTER_API_KEY && (
              <p className="text-xs text-muted-foreground mt-2">
                Note: Please set REACT_APP_OPENROUTER_API_KEY in your .env file
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Out-of-Box Confirmation Dialog */}
      <Dialog open={showOutOfBoxDialog} onOpenChange={setShowOutOfBoxDialog}>
        <DialogContent className="max-w-md rounded-2xl backdrop-blur-xl bg-background/90 border border-border/50 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Out-of-the-Box Exploration</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground pt-2">
              This request requires me to search outside my immediate knowledge base about Dhiwin Samrich. Would you like to proceed with an expanded exploration?
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button
              onClick={handleOutOfBoxCancel}
              variant="outline"
              className="flex-1 rounded-xl"
            >
              Cancel
            </Button>
            <Button
              onClick={handleOutOfBoxConfirm}
              className="flex-1 rounded-xl"
            >
              Proceed
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}


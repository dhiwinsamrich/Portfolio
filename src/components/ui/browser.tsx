"use client"

import type React from "react"
import { useEffect, useState } from "react"
import {
  Battery,
  BookmarkIcon,
  ChevronLeft,
  ChevronRight,
  Download,
  Globe,
  History,
  Home,
  Lock,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Search,
  Settings,
  Shield,
  Square,
  Star,
  StarOff,
  Volume2,
  Wifi,
  X,
} from "lucide-react"

import { cn } from "../../lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"
import { Card } from "./card"
import { Input } from "./input"
import { Separator } from "./separator"

interface Tab {
  id: string
  title: string
  url: string
  favicon?: string
  isActive: boolean
  isLoading: boolean
}

interface Bookmark {
  id: string
  title: string
  url: string
  favicon?: string
}

interface HistoryItem {
  id: string
  title: string
  url: string
  timestamp: Date
  favicon?: string
}

interface BrowserProps {
  image?: string
  initialUrl?: string
  initialTabs?: Partial<Tab>[]
  theme?: "light" | "dark" | "system"
  showWindowControls?: boolean
  showBookmarksBar?: boolean
  showStatusBar?: boolean
  className?: string
  enableTabManagement?: boolean
  enableBookmarks?: boolean
  enableHistory?: boolean
  enableDownloads?: boolean
  enableSettings?: boolean
  maxTabs?: number
  customBookmarks?: Bookmark[]
  customHistory?: HistoryItem[]
  onNavigate?: (url: string, tabId: string) => void
  onTabCreate?: (tab: Tab) => void
  onTabClose?: (tabId: string) => void
  onTabSwitch?: (tabId: string) => void
  onBookmarkToggle?: (url: string, isBookmarked: boolean) => void
  onDownload?: (url: string) => void
  renderContent?: (url: string, isLoading: boolean) => React.ReactNode
  customFavicons?: Record<string, string>
  openLinksInNewTab?: boolean
  autoFocusAddressBar?: boolean
  simulateLoading?: boolean
  loadingDuration?: number
}

export function Browser({
  image = "/placeholder.svg",
  initialUrl = "https://dalim.in",
  initialTabs,
  showWindowControls = false,
  showBookmarksBar = false,
  showStatusBar = true,
  className,
  enableTabManagement = false,
  enableBookmarks = true,
  enableHistory = true,
  enableDownloads = true,
  enableSettings = true,
  maxTabs = 10,
  customBookmarks,
  customHistory,
  onNavigate,
  onTabCreate,
  onTabClose,
  onTabSwitch,
  onBookmarkToggle,
  onDownload,
  renderContent,
  autoFocusAddressBar = false,
  simulateLoading = true,
  loadingDuration = 1000,
}: BrowserProps = {}) {
  const [tabs, setTabs] = useState<Tab[]>(() => {
    if (initialTabs && initialTabs.length > 0) {
      return initialTabs.map((tab, index) => ({
        id: tab.id || Date.now().toString() + index,
        title: tab.title || "New Tab",
        url: tab.url || initialUrl,
        favicon: tab.favicon,
        isActive: index === 0,
        isLoading: false,
      }))
    }
    return [
      {
        id: "1",
        title: "New Tab",
        url: initialUrl,
        isActive: true,
        isLoading: false,
      },
    ]
  })

  const [currentUrl, setCurrentUrl] = useState(initialUrl)
  const [inputUrl, setInputUrl] = useState(initialUrl)
  const [isSecure, setIsSecure] = useState(true)
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showBookmarks, setShowBookmarks] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  const [bookmarks] = useState<Bookmark[]>(
    customBookmarks || [
      {
        id: "1",
        title: "Google",
        url: "https://www.google.com",
        favicon: "🔍",
      },
      { id: "2", title: "GitHub", url: "https://github.com", favicon: "🐙" },
      {
        id: "3",
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        favicon: "📚",
      },
      {
        id: "4",
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        favicon: "📖",
      },
    ]
  )

  const [history] = useState<HistoryItem[]>(
    customHistory || [
      {
        id: "1",
        title: "Google",
        url: "https://www.google.com",
        timestamp: new Date(Date.now() - 3600000),
        favicon: "🔍",
      },
      {
        id: "2",
        title: "GitHub",
        url: "https://github.com",
        timestamp: new Date(Date.now() - 7200000),
        favicon: "🐙",
      },
      {
        id: "3",
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        timestamp: new Date(Date.now() - 10800000),
        favicon: "📚",
      },
    ]
  )

  const activeTab = tabs.find((tab) => tab.isActive)

  useEffect(() => {
    if (autoFocusAddressBar) {
      const addressBar = document.querySelector(
        'input[placeholder*="Search or enter address"]'
      ) as HTMLInputElement
      if (addressBar) {
        addressBar.focus()
      }
    }
  }, [autoFocusAddressBar])

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const createNewTab = () => {
    if (tabs.length >= maxTabs) return

    const newTab: Tab = {
      id: Date.now().toString(),
      title: "New Tab",
      url: "about:blank",
      isActive: true,
      isLoading: false,
    }

    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: false })).concat(newTab)
    )
    setCurrentUrl("about:blank")
    setInputUrl("")

    onTabCreate?.(newTab)
  }

  const closeTab = (tabId: string) => {
    if (tabs.length === 1) return

    const tabIndex = tabs.findIndex((tab) => tab.id === tabId)
    const wasActive = tabs[tabIndex].isActive

    const newTabs = tabs.filter((tab) => tab.id !== tabId)

    if (wasActive && newTabs.length > 0) {
      const nextActiveIndex = Math.min(tabIndex, newTabs.length - 1)
      newTabs[nextActiveIndex].isActive = true
      setCurrentUrl(newTabs[nextActiveIndex].url)
      setInputUrl(newTabs[nextActiveIndex].url)
    }

    setTabs(newTabs)

    onTabClose?.(tabId)
  }

  const switchTab = (tabId: string) => {
    const newTabs = tabs.map((tab) => ({
      ...tab,
      isActive: tab.id === tabId,
    }))

    const activeTab = newTabs.find((tab) => tab.isActive)
    if (activeTab) {
      setCurrentUrl(activeTab.url)
      setInputUrl(activeTab.url)
    }

    setTabs(newTabs)

    onTabSwitch?.(tabId)
  }

  const navigateToUrl = (url: string) => {
    if (
      !url.startsWith("http://") &&
      !url.startsWith("https://") &&
      !url.startsWith("about:")
    ) {
      url = `https://www.google.com/search?q=${encodeURIComponent(url)}`
    }

    setCurrentUrl(url)
    setInputUrl(url)
    setIsSecure(url.startsWith("https://"))

    setTabs((prev) =>
      prev.map((tab) =>
        tab.isActive
          ? {
              ...tab,
              url,
              title: new URL(url).hostname || "New Tab",
              isLoading: simulateLoading,
            }
          : tab
      )
    )

    const activeTabId = tabs.find((tab) => tab.isActive)?.id || ""
    onNavigate?.(url, activeTabId)

    if (simulateLoading) {
      setTimeout(() => {
        setTabs((prev) =>
          prev.map((tab) => (tab.isActive ? { ...tab, isLoading: false } : tab))
        )
      }, loadingDuration)
    }
  }

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigateToUrl(inputUrl)
  }

  const goBack = () => {
    setCanGoForward(true)
  }

  const goForward = () => {
    setCanGoBack(true)
  }

  const refresh = () => {
    setTabs((prev) =>
      prev.map((tab) => (tab.isActive ? { ...tab, isLoading: true } : tab))
    )

    setTimeout(() => {
      setTabs((prev) =>
        prev.map((tab) => (tab.isActive ? { ...tab, isLoading: false } : tab))
      )
    }, 1000)
  }

  const toggleBookmark = () => {
    const newBookmarkedState = !isBookmarked
    setIsBookmarked(newBookmarkedState)

    onBookmarkToggle?.(currentUrl, newBookmarkedState)
  }

  const simulateDownload = () => {
    onDownload?.(currentUrl)

    if (!enableDownloads) return

    setIsDownloading(true)
    setDownloadProgress(0)

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          return 0
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div
      className={cn(
        "bg-background border-border flex h-full flex-col overflow-hidden rounded-lg border",
        isFullscreen && "fixed inset-0 z-50 rounded-none border-0",
        className
      )}
    >
      {showWindowControls && (
        <div className="bg-muted/50 border-border flex items-center justify-between border-b px-2 py-1.5 md:px-4 md:py-2">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="flex gap-1 md:gap-2">
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="text-muted-foreground flex items-center gap-1 md:gap-2 text-xs md:text-sm font-sans">
            <Wifi className="h-3 w-3 md:h-4 md:w-4 hidden sm:block" />
            <Volume2 className="h-3 w-3 md:h-4 md:w-4 hidden sm:block" />
            <Battery className="h-3 w-3 md:h-4 md:w-4 hidden sm:block" />
            <span className="text-xs md:text-sm">
              {currentTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              })}
            </span>
          </div>

          <div className="flex items-center gap-0.5 md:gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-6 w-6 md:h-9 md:w-auto p-0"
            >
              {isFullscreen ? (
                <Minimize2 className="h-3 w-3 md:h-4 md:w-4" />
              ) : (
                <Maximize2 className="h-3 w-3 md:h-4 md:w-4" />
              )}
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 md:h-9 md:w-auto p-0 hidden md:flex">
              <Square className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 md:h-9 md:w-auto p-0">
              <X className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      )}

      {enableTabManagement && (
        <div className="bg-muted/30 border-border flex items-center border-b">
          <div className="flex flex-1 items-center overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(
                  "border-border flex max-w-48 md:max-w-64 min-w-[120px] md:min-w-0 cursor-pointer items-center gap-1 md:gap-2 border-r px-2 md:px-4 py-1.5 md:py-2",
                  tab.isActive ? "bg-background" : "hover:bg-muted/50"
                )}
                onClick={() => switchTab(tab.id)}
              >
                <div className="flex min-w-0 flex-1 items-center gap-1 md:gap-2">
                  {tab.isLoading ? (
                    <div className="border-primary h-3 w-3 md:h-4 md:w-4 animate-spin rounded-full border-2 border-t-transparent flex-shrink-0" />
                  ) : (
                    <Globe className="text-muted-foreground h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                  )}
                  <span className="truncate text-xs md:text-sm font-sans">{tab.title}</span>
                </div>
                {tabs.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-muted h-3 w-3 md:h-4 md:w-4 p-0 flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeTab(tab.id)
                    }}
                  >
                    <X className="h-2.5 w-2.5 md:h-3 md:w-3" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={createNewTab}
            className="border-border border-l px-2 md:px-3 py-1.5 md:py-2 flex-shrink-0"
          >
            <Plus className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      )}

      <div className="bg-background border-border flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-2 border-b p-1.5 md:p-2">
        <div className="flex items-center gap-0.5 md:gap-1 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            disabled={!canGoBack}
            className="h-8 w-8 md:h-9 md:w-auto p-0"
          >
            <ChevronLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={goForward}
            disabled={!canGoForward}
            className="h-8 w-8 md:h-9 md:w-auto p-0"
          >
            <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={refresh} className="h-8 w-8 md:h-9 md:w-auto p-0">
            <RotateCcw className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToUrl("about:home")}
            className="h-8 w-8 md:h-9 md:w-auto p-0"
          >
            <Home className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
        </div>

        <form onSubmit={handleUrlSubmit} className="flex flex-1 items-center min-w-0">
          <div className="relative flex flex-1 items-center w-full">
            <div className="absolute left-2 md:left-3 flex items-center gap-1 md:gap-2">
              {isSecure ? (
                <Lock className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
              ) : (
                <Shield className="text-muted-foreground h-3 w-3 md:h-4 md:w-4" />
              )}
            </div>
            <Input
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Search or enter address"
              className="pr-2 md:pr-4 pl-8 md:pl-10 text-xs md:text-sm h-8 md:h-9"
            />
          </div>
        </form>

        <div className="flex items-center gap-0.5 md:gap-1 flex-shrink-0">
          {enableBookmarks && (
            <Button variant="ghost" size="sm" onClick={toggleBookmark} className="h-8 w-8 md:h-9 md:w-auto p-0">
              {isBookmarked ? (
                <Star className="h-3.5 w-3.5 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
              ) : (
                <StarOff className="h-3.5 w-3.5 md:h-4 md:w-4" />
              )}
            </Button>
          )}
          {enableDownloads && (
            <Button variant="ghost" size="sm" onClick={simulateDownload} className="h-8 w-8 md:h-9 md:w-auto p-0">
              <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </Button>
          )}
          {enableSettings && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
              className="h-8 w-8 md:h-9 md:w-auto p-0"
            >
              <MoreHorizontal className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </Button>
          )}
        </div>
      </div>

      {showBookmarksBar && enableBookmarks && (
        <div className="bg-muted/20 border-border flex items-center gap-2 border-b px-4 py-1 text-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBookmarks(!showBookmarks)}
            className="text-xs"
          >
            <BookmarkIcon className="mr-1 h-3 w-3" />
            Bookmarks
          </Button>
          {enableHistory && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
              className="text-xs"
            >
              <History className="mr-1 h-3 w-3" />
              History
            </Button>
          )}
          <Separator orientation="vertical" className="h-4" />
          {bookmarks.slice(0, 4).map((bookmark) => (
            <Button
              key={bookmark.id}
              variant="ghost"
              size="sm"
              onClick={() => navigateToUrl(bookmark.url)}
              className="text-xs"
            >
              <span className="mr-1">{bookmark.favicon}</span>
              {bookmark.title}
            </Button>
          ))}
        </div>
      )}

      {isDownloading && enableDownloads && (
        <div className="border-border border-b bg-blue-50 px-2 md:px-4 py-1.5 md:py-2 dark:bg-blue-950">
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-sans">
            <Download className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
            <span className="hidden sm:inline">Downloading file...</span>
            <span className="sm:hidden">Downloading...</span>
            <div className="bg-muted h-1.5 md:h-2 flex-1 rounded-full min-w-0">
              <div
                className="h-1.5 md:h-2 rounded-full bg-blue-600 transition-all duration-200"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
            <span className="text-xs flex-shrink-0">{downloadProgress}%</span>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden relative">
        {showBookmarks && enableBookmarks && (
          <Card className={cn(
            "absolute md:relative z-50 md:z-auto inset-0 md:inset-auto m-0 md:m-2 md:mr-0 w-full md:w-80 overflow-y-auto p-4 md:p-4",
            "bg-background shadow-lg md:shadow-sm"
          )}>
            <div className="flex items-center justify-between mb-4 md:mb-4">
              <h3 className="flex items-center gap-2 font-semibold font-serif text-lg md:text-base">
                <BookmarkIcon className="h-4 w-4" />
                Bookmarks
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBookmarks(false)}
                className="md:hidden h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded p-2"
                  onClick={() => navigateToUrl(bookmark.url)}
                >
                  <span className="text-lg">{bookmark.favicon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm md:text-sm font-medium font-sans">
                      {bookmark.title}
                    </div>
                    <div className="text-muted-foreground truncate text-xs font-sans">
                      {bookmark.url}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {showHistory && enableHistory && (
          <Card className={cn(
            "absolute md:relative z-50 md:z-auto inset-0 md:inset-auto m-0 md:m-2 md:mr-0 w-full md:w-80 overflow-y-auto p-4 md:p-4",
            "bg-background shadow-lg md:shadow-sm"
          )}>
            <div className="flex items-center justify-between mb-4 md:mb-4">
              <h3 className="flex items-center gap-2 font-semibold font-serif text-lg md:text-base">
                <History className="h-4 w-4" />
                History
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHistory(false)}
                className="md:hidden h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded p-2"
                  onClick={() => navigateToUrl(item.url)}
                >
                  <span className="text-lg">{item.favicon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium font-sans">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground truncate text-xs font-sans">
                      {item.url}
                    </div>
                    <div className="text-muted-foreground text-xs font-sans">
                      {item.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {showSettings && enableSettings && (
          <Card className={cn(
            "absolute md:relative z-50 md:z-auto inset-0 md:inset-auto m-0 md:m-2 md:mr-0 w-full md:w-80 overflow-y-auto p-4 md:p-4",
            "bg-background shadow-lg md:shadow-sm"
          )}>
            <div className="flex items-center justify-between mb-4 md:mb-4">
              <h3 className="flex items-center gap-2 font-semibold font-serif text-lg md:text-base">
                <Settings className="h-4 w-4" />
                Settings
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="md:hidden h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium font-serif text-base md:text-sm">Privacy & Security</h4>
                <div className="space-y-2 text-sm font-sans">
                  <div className="flex items-center justify-between">
                    <span>Block pop-ups</span>
                    <Badge variant="secondary">On</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Safe browsing</span>
                    <Badge variant="secondary">Enhanced</Badge>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2 font-medium font-serif text-base md:text-sm">Appearance</h4>
                <div className="space-y-2 text-sm font-sans">
                  <div className="flex items-center justify-between">
                    <span>Theme</span>
                    <Badge variant="outline">System</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Zoom</span>
                    <Badge variant="outline">100%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className={cn(
          "dark:bg-muted/20 border-border m-1 md:m-2 flex flex-1 flex-col overflow-hidden rounded-md border bg-white",
          (showBookmarks || showHistory || showSettings) && "hidden md:flex"
        )}>
          {renderContent ? (
            renderContent(currentUrl, activeTab?.isLoading || false)
          ) : currentUrl === "about:blank" || currentUrl === "" ? (
            <div className="flex flex-1 items-center justify-center p-4 md:p-8">
              <div className="space-y-3 md:space-y-4 text-center w-full max-w-md">
                <Search className="text-muted-foreground mx-auto h-12 w-12 md:h-16 md:w-16" />
                <h2 className="text-xl md:text-2xl font-semibold font-serif">New Tab</h2>
                <p className="text-muted-foreground font-sans text-sm md:text-base px-4">
                  Start by searching or entering a web address
                </p>
                <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                  {bookmarks.slice(0, 4).map((bookmark) => (
                    <Card
                      key={bookmark.id}
                      className="hover:bg-muted/50 cursor-pointer p-3 md:p-4 transition-colors"
                      onClick={() => navigateToUrl(bookmark.url)}
                    >
                      <div className="space-y-1.5 md:space-y-2 text-center">
                        <div className="text-xl md:text-2xl">{bookmark.favicon}</div>
                        <div className="text-xs md:text-sm font-medium font-sans">
                          {bookmark.title}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <img
                src={image}
                alt={image}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {showStatusBar && (
        <div className="bg-muted/30 border-border text-muted-foreground flex items-center justify-between border-t px-2 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs font-sans">
          <div className="flex items-center gap-2 md:gap-4 min-w-0">
            <span className="truncate">Ready</span>
            {isSecure && (
              <span className="flex items-center gap-0.5 md:gap-1 flex-shrink-0">
                <Lock className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span className="hidden sm:inline">Secure</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <span className="hidden sm:inline">Zoom: 100%</span>
            <span className="text-[10px] md:text-xs">
              {tabs.length} tab{tabs.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}


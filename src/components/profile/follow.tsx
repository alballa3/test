"use client"

import { useState, useEffect } from "react"
import { UserPlus, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { api } from "@/api"

interface FollowProps {
  userId: number
  initialFollowState?: boolean
  userName?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  showIcon?: boolean
  showTooltip?: boolean
  className?: string
  onFollowChange?: (isFollowing: boolean) => void
}

export default function Follow({
  
  initialFollowState = false,
  userName = "",
  variant = "default",
  size = "sm",
  showIcon = true,
  showTooltip = true,
  className = "",
  onFollowChange
}: FollowProps) {
  const [isFollowing, setIsFollowing] = useState(initialFollowState)
  const [isLoading, setIsLoading] = useState(false)

  // If the initialFollowState prop changes, update the local state
  useEffect(() => {
    setIsFollowing(initialFollowState)
  }, [initialFollowState])

  const toggleFollow = async () => {
    try {
      setIsLoading(true)
      
      // In a real implementation, you would call your API here
      // const client = await api()
      
      // Example API call (adjust according to your actual API)
      // const endpoint = isFollowing ? `/users/${userId}/unfollow` : `/users/${userId}/follow`
      // await client.post(endpoint)
      
      // For now, we'll just toggle the state locally
      const newFollowState = !isFollowing
      setIsFollowing(newFollowState)
      
      // Notify parent component if callback is provided
      if (onFollowChange) {
        onFollowChange(newFollowState)
      }
    } catch (error) {
      console.error("Failed to toggle follow state:", error)
      // You might want to show an error notification here
    } finally {
      setIsLoading(false)
    }
  }

  const buttonContent = (
    <Button
      variant={isFollowing ? "secondary" : variant}
      size={size}
      onClick={toggleFollow}
      disabled={isLoading}
      className={`transition-all duration-300 ${className}`}
    >
      {showIcon && (
        <span className="mr-1">
          {isFollowing ? (
            <UserCheck className="h-4 w-4" />
          ) : (
            <UserPlus className="h-4 w-4" />
          )}
        </span>
      )}
      <span>{isFollowing ? "Following" : "Follow"}</span>
    </Button>
  )

  if (showTooltip && userName) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {buttonContent}
          </TooltipTrigger>
          <TooltipContent>
            <p>{isFollowing ? "Unfollow" : "Follow"} {userName}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return buttonContent
}
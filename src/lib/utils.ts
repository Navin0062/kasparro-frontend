import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Centralized Status Logic
export function getStatusColor(status: string, variant: 'text' | 'bg' | 'border' = 'text') {
  // Normalize status to lowercase just in case
  const s = status.toLowerCase();
  
  const colors: Record<string, Record<string, string>> = {
    pass: {
      text: "text-green-500",
      bg: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      border: "border-green-200 dark:border-green-800"
    },
    warning: {
      text: "text-yellow-500",
      bg: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      border: "border-yellow-200 dark:border-yellow-800"
    },
    critical: {
      text: "text-red-500",
      bg: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      border: "border-red-200 dark:border-red-800"
    }
  };

  // Default fallback if status is missing or invalid
  return colors[s]?.[variant] || colors['pass'][variant];
}
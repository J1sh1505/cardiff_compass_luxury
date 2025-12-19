// src/lib/errorHandler.ts

export class NetworkError extends Error {}

/**
 * Centralized Error Handler.
 * Catches errors to prevent crashes and displays user-friendly notifications.
 */
export function handleBookingError(error: unknown, showToast: (message: string) => void) {
  
  if (error instanceof NetworkError) {
    showToast("Connection lost. Please check your internet connection.");
  } else {
    // Log unexpected errors for debugging but keep the UI clean for the user.
    console.error("Critical booking failure:", error);
    showToast("Something went wrong. Support has been notified.");
  }
}
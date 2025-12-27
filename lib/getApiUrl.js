import { headers } from "next/headers";

/**
 * Get the API base URL with fallback for local development
 * Automatically detects production URL from headers
 */
export async function getApiUrl() {
  // If explicitly set, use it
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // For server-side, get from headers
  if (typeof window === 'undefined') {
    try {
      const headersList = await headers();
      const host = headersList.get("host");
      const protocol = headersList.get("x-forwarded-proto") || 
                      (process.env.NODE_ENV === 'production' ? 'https' : 'http');
      
      if (host) {
        return `${protocol}://${host}`;
      }
    } catch (e) {
      // If headers() fails (e.g., during build), fall through
    }
    
    // Fallback: try VERCEL_URL
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    
    // Final fallback for server-side
    return 'http://localhost:3000';
  }
  
  // Client-side: fallback to localhost for development
  return 'http://localhost:3000';
}


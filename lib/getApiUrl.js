/**
 * Get the API base URL with fallback for local development
 */
export function getApiUrl() {
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
}


const getAccessToken = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  const token_endpoint = process.env.SPOTIFY_TOKEN_ENDPOINT;

  // Return early if env vars are missing (during build)
  if (!client_id || !client_secret || !refresh_token || !token_endpoint) {
    return { access_token: null };
  }

  const basic = btoa(`${client_id}:${client_secret}`);

  const response = await fetch(token_endpoint, {
    next: { revalidate: 3600 },
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token.toString(),
    }),
  });
  return response.json();
};

export const getLastPlayed = async () => {
  const access_token = await getAccessToken();

  if (!access_token.access_token) {
    // Return a mock response during build or when tokens are missing
    return new Response(null, { status: 204 });
  }

  const last_played_endpoint = process.env.RECENTLY_PLAYED_ENDPOINT;
  if (!last_played_endpoint) {
    return new Response(null, { status: 204 });
  }

  const response = await fetch(last_played_endpoint, {
    next: {revalidate: 30},
    headers: {
      Authorization: `Bearer ${access_token.access_token}`
    }
  })

  return response;
}

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();
  
  if (!access_token.access_token) {
    // Return a mock response during build or when tokens are missing
    return new Response(null, { status: 204 });
  }

  const now_playing_endpoint = process.env.NOW_PLAYING_ENDPOINT;
  if (!now_playing_endpoint) {
    return new Response(null, { status: 204 });
  }

  return fetch(now_playing_endpoint, {
    next: { revalidate: 3000 },
    headers: {
      Authorization: `Bearer ${access_token.access_token}`,
    },
  });
};

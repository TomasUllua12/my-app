interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    publishedAt: string;
    description: string;
    channelTitle: string;
  };
}

interface YouTubeResponse {
  items: YouTubeVideo[];
}

export async function getLatestVideos() {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    console.warn('YouTube API credentials not found');
    return [];
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=2`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: YouTubeResponse = await res.json();

    return data.items.map((item: YouTubeVideo) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
      channelTitle: item.snippet.channelTitle,
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}
  
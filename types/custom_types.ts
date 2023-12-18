export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  viewCount: string;
  channel: {
    channelId: string;
    channelTitle: string;
    channelImage: string;
  };
  publishedDate: string;
};

export type ChannelDetailsType = {
  channelName: string;
  subscribersCount: string;
  channelImage: string;
};

// Channel Data ----------------------------------
export interface IChannelRes {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    snippet: {
      title: string;
      description: string;
      customUrl: string;
      publishedAt: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      localized: {
        title: string;
        description: string;
      };
    };
  }>;
}

//--------------------------------------------------------------

//Channel get channel playlist ID--------------------------------
export interface IChannelContentDetailsRes {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    contentDetails: {
      relatedPlaylists: {
        likes: string;
        uploads: string;
      };
    };
  }>;
}
//----------------------------------------------------------------

// get channel videos

export interface IChannelVideosRes {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      playlistId: string;
      position: number;
      resourceId: {
        kind: string;
        videoId: string;
      };
      videoOwnerChannelTitle: string;
      videoOwnerChannelId: string;
    };
  }>;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface ISearchQueryRes {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<{
    kind: string;
    etag: string;
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      liveBroadcastContent: string;
      publishTime: string;
    };
  }>;
}

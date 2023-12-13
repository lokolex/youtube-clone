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

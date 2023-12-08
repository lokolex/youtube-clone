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

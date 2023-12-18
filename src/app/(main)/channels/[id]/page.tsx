'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import { Dot } from 'lucide-react';

import { fetchChannel, fetchChannelVideos } from '@/lib/api';
import { IChannelRes, IChannelVideosRes } from '../../../../../types/custom_types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Loading from '@/app/loading';
import Thumbnail from '@/components/Thumbnail';

const ChannelId = () => {
  const { id } = useParams();

  const {
    data: channelDetails,
    error: channelDetailsError,
    isLoading: channelDetailsIsLoading,
  } = useSWR<IChannelRes['items'][number] | undefined>(
    id ? `channelDetails/${id}` : null,
    () => fetchChannel(id as string),
    {
      revalidateOnFocus: false,
    }
  );

  const {
    data: channelVideos,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useSWR<IChannelVideosRes['items'] | undefined>(
    id ? `channelVideos/${id}` : null,
    () => fetchChannelVideos(id as string),
    {
      revalidateOnFocus: false,
    }
  );

  if (channelDetailsError || channelVideosError) throw new Error('Error fetching channel data!');

  return (
    <div className="mt-[-64px]">
      <div className="h-64 w-full mb-10 md:rounded-2xl rounded-none overflow-hidden">
        {channelDetails && (
          <Image
            src="https://argumenti.ru/images/arhnews/438020.jpg"
            alt={channelDetails.snippet.title}
            width={600}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
        )}
      </div>

      <div className="mb-10 flex flex-col md:flex-row items-center space-x-5 px-3">
        <Avatar className="w-28 h-28">
          <AvatarImage
            src={channelDetails?.snippet.thumbnails.high.url}
            alt={channelDetails?.snippet.title}
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-bold text-center md:text-left text-3xl md:text-5xl mb-2 mt-4 md:mt-0">
            {channelDetails?.snippet.title}
          </h2>
          <p className="flex items-center text-sm">
            {channelDetails?.snippet.customUrl} <Dot /> 2 subscribers <Dot /> 8 videos
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        {(channelDetailsIsLoading || channelVideosIsLoading) &&
          Array(8)
            .fill(null)
            .map((_, idx) => <Loading key={idx} />)}
        {channelVideos?.map((video) => (
          <Thumbnail
            key={video.id}
            video={{
              id: video.snippet.resourceId.videoId,
              title: video.snippet.title,
              description: video.snippet.description,
              thumbnail: video.snippet.thumbnails.high.url,
              viewCount: '15',
              publishedDate: video.snippet.publishedAt,
              channel: {
                channelId: video.snippet.channelId,
                channelTitle: video.snippet.channelTitle,
                channelImage: '',
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChannelId;

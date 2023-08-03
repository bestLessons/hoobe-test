'use client'
import { CONTENT_TYPE, TContentItem } from '@/types/builder.types'
import { MediaItem } from '../mediaItem/mediaItem';
import { useLogErrorOnce } from '@/hooks/useLogErrorOnce';

type TProps = {
  data: TContentItem;
}

export const ContentGridItem = ({ data }: TProps) => {
  const { contentType } = data;
  const logError = useLogErrorOnce();

  const componentsMap = {
    [CONTENT_TYPE.MEDIA]: MediaItem,
  }

  const Component = componentsMap[contentType];

  if (!Component) {
    logError(`Unsupported content type: ${contentType}`);
    return null;
  }

  return <Component data={data} />
}
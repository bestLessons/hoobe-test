import { TContentItem } from '@/types/builder.types';
import { MediaCard } from '../mediaCard/mediaCard';
import { getSocialIconComponent } from '@/utils/socialPlatform.utils';
import { SOCIAL_PLATFORM } from '@/types/socialPlatform.types';

type TProps = {
  data: TContentItem;
};

export const MediaItem = ({ data }: TProps) => {
  const {
    id,
    title,
    link,
    isEmbedEnabled,
    hasPhoto,
    isFeatured,
    socialPlatform,
  } = data;

  const SociaIcon = getSocialIconComponent(socialPlatform);

  if (isEmbedEnabled) {
    let videoLink = socialPlatform === SOCIAL_PLATFORM.YOUTUBE
      ? link.replace('channel/UCvd', 'embed/videoseries?list=UUvd')
      : link
    return <MediaCard title={title} type="video" link={videoLink} />;
  }

  if (isFeatured) {
    const imgUrl = `/images/content-id-${id}-image.jpg`;
    return (
      <MediaCard
        title={title}
        type="photo"
        link={link}
        img={imgUrl}
        info={SociaIcon ? <SociaIcon /> : undefined}
      />
    );
  }

  return null;
};

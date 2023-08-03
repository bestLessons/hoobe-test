import { SOCIAL_PLATFORM } from '@/types/socialPlatform.types';
import InstagramIcon from '@/assets/images/instagram.svg?svr';
import ThreadsIcon from '@/assets/images/threads.svg?svr';
import TikTokIcon from '@/assets/images/tiktok.svg?svr';
import TwitterIcon from '@/assets/images/twitter.svg?svr';
import HoobeIcon from '@/assets/images/hoobe.svg?svr';
import { TUserSocialPlatform } from '@/types/user.types';
import { TSocialLink } from '@/components/socialLinkItem/socialLinkItem';

export const getSocialIconComponent = (platform: SOCIAL_PLATFORM) => {
  const map = {
    [SOCIAL_PLATFORM.INSTAGRAM]: InstagramIcon,
    [SOCIAL_PLATFORM.THREADS]: ThreadsIcon,
    [SOCIAL_PLATFORM.TIKTOK]: TikTokIcon,
    [SOCIAL_PLATFORM.TWITTER]: TwitterIcon,
    [SOCIAL_PLATFORM.HOOBE]: HoobeIcon,
    [SOCIAL_PLATFORM.YOUTUBE]: null,
  };

  return map[platform] || null;
};

export const convertUserSocialPlatformToSocialLinkProps = (
  socialPlaform: TUserSocialPlatform
): TSocialLink => {
  return {
    link: socialPlaform.link,
    socialPlatform: socialPlaform.socialPlatform,
  };
};

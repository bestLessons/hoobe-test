import { SOCIAL_PLATFORM } from '@/types/socialPlatform.types';
import { getSocialIconComponent } from '@/utils/socialPlatform.utils';
import styles from './socialLinkItem.module.scss';

export type TSocialLink = {
  socialPlatform: SOCIAL_PLATFORM;
  link: string;
}

export type TSocialLinkItemProps = {} & TSocialLink;

export const SocialLinkItem = ({ socialPlatform, link }: TSocialLinkItemProps) => {
  const IconComponent = getSocialIconComponent(socialPlatform); 

  if (!IconComponent) {
    return null;
  }
  
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        <IconComponent width={24} height={24} className={styles.icon} />
      </a>
    </div>
  );
};

import { TUser } from '@/types/user.types';
import Image from 'next/image';
import styles from './profile.module.scss';
import { SocialLinksList } from '../socialLinksList/socialLinksList';
import { TSocialLink } from '../socialLinkItem/socialLinkItem';
import { ProfileNameBar } from '../profileNameBar/profileNameBar';

type TProps = {
  user: TUser;
  socialLinks: TSocialLink[];
};

export const Profile = ({ user, socialLinks }: TProps) => {
  return (
    <section className={styles.container}>
      {/* I'not sure where to get user photo */}
      {user.hasPhoto && (
        <Image
          src="/images/hoobe-logo.png"
          alt="hoo.be Logo"
          width={104}
          height={104}
          priority
        />
      )}
      <ProfileNameBar name={user.fullName} />
      <SocialLinksList links={socialLinks} />
    </section>
  );
};

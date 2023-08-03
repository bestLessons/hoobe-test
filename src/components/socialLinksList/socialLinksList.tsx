import {
  SocialLinkItem,
  TSocialLink,
} from '../socialLinkItem/socialLinkItem';
import styles from './socialLinksList.module.scss';

type TProps = {
  links: TSocialLink[];
};

export const SocialLinksList = ({ links }: TProps) => {
  return (
    <div className={styles.container}>
      {links.map((linkItem, idx) => (
        <SocialLinkItem key={idx} {...linkItem} />
      ))}
    </div>
  );
};

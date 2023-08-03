import Link from 'next/link';
import styles from './mediaCard.module.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ReactPlayerNoSSR = dynamic(() => import('react-player'), { ssr: false });

type TProps = {
  title?: React.ReactNode;
  link?: string;
  img?: string;
  type?: 'video' | 'photo';
  info?: React.ReactNode;
};

export const MediaCard = ({
  title,
  link,
  img,
  type = 'photo',
  info,
}: TProps) => {
  const isLink = type === 'photo' && link;
  const Component = isLink ? Link : 'div';
  const props = isLink ? { href: link } : {};

  return (
    <Component {...(props as any)} className={styles.card}>
      <div className={styles.mediaItem}>
        {type === 'photo' && img && (
          <Image
            src={img}
            alt=""
            width={1080}
            height={607}
            className={styles.image}
          />
        )}

        {type === 'video' && link && (
          <ReactPlayerNoSSR
            url={link}
            className={styles.player}
            width="100%"
            height="100%"
            playsinline
          />
        )}
      </div>

      {(title || info) && (
        <div className={styles.contentContainer}>
          <p className={styles.title}>{title}</p>
          {info && <div>{info}</div>}
        </div>
      )}
    </Component>
  );
};

import { ContentGridLayoutItem } from '../contentGridLayoutItem/contentGridLayoutItem';
import styles from './contentGridLayout.module.scss';

type TProps = {
  children: React.ReactNode;
}

export const ContentGridLayout = ({ children }: TProps) => {
  return (
    <div className={styles.gridLayout}>{children}</div>
  )
}

ContentGridLayout.Item = ContentGridLayoutItem;
import styles from './contentGridLayoutItem.module.scss';

type TProps = {
  children: React.ReactNode;
}

export const ContentGridLayoutItem = ({ children }: TProps) => {
  return (
    <div className={styles.gridLayout}>{children}</div>
  )
}

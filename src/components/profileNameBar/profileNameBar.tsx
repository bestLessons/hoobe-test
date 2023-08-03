import styles from './profileNameBar.module.scss';

type TProps = {
  name?: string;
}

export const ProfileNameBar = ({ name }: TProps) => {

  if (!name) return null;

  return (
    <div className={styles.profileName}>
      {name}
    </div>
  )
}
'use client'

import Link from 'next/link';
import { Button } from '../button/button';
import styles from './layoutFooter.module.scss';
import HoobeIcon from '@/assets/images/hoobe.svg?svr';

export const LayoutFooter = () => {
  return (
    <footer className={styles.footer}>
      <Button prepend={<HoobeIcon className={styles.hoobeIcon} />} onClick={() => alert('create your hoo.be')}>
        create your hoo.be
      </Button>
      <Button Component={Link} href="https://devapp.hoo.be/login" size="xs" buttonStyle="text">
        login
      </Button>
    </footer>
  );
};

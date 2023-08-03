import styles from './page.module.scss';
import pageData from './pageData.json';
import { TPageData } from '@/types/pageData.types';
import { convertUserSocialPlatformToSocialLinkProps } from '@/utils/socialPlatform.utils';
import { Profile } from '@/components/profile/profile';
import { ContentGrid } from '@/components/contentGrid/contentGrid';

export default async function Home() {
  const data = await getData();

  if (!data) {
    <div>Error: page data is not provided</div>;
  }

  const socialLinks = data.userSocialPlatform.map(
    convertUserSocialPlatformToSocialLinkProps
  );

  
  return (
    <main className={styles.main}>
      <Profile user={data.user} socialLinks={socialLinks} />
      <ContentGrid content={data.content} />
    </main>
  );
}

async function getData() {
  // replace with data fetching
  await new Promise((res) => setTimeout(res, 100));
  return pageData as TPageData;
}

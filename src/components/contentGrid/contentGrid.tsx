import { TContent } from '@/types/builder.types';
import { ContentGridItem } from '../contentGridItem/contentGridItem';
import { ContentGridLayout } from '../contentGridLayout/contentGridLayout';

type TProps = {
  content: TContent;
};

export const ContentGrid = ({ content }: TProps) => {
  return (
    <ContentGridLayout>
      {content.map((contentItem, idx) => {
        if (Array.isArray(contentItem.content)) {
          return <ContentGrid key={idx} content={contentItem.content} />;
        }

        return (
          <ContentGridLayout.Item key={contentItem.content.id}>
            <ContentGridItem data={contentItem.content} />
          </ContentGridLayout.Item>
        );
      })}
    </ContentGridLayout>
  );
};

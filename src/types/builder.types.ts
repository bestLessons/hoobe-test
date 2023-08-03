import { ID, UUID } from './global.types';
import { SOCIAL_PLATFORM } from './socialPlatform.types';

export enum CONTENT_TYPE {
  MEDIA = 0,
}

export enum MIME_TYPE {
  PHOTO = 4,
}

export type TContentItem = {
  id: ID;
  altId: UUID;
  title: string;
  contentType: CONTENT_TYPE;
  mimeType?: MIME_TYPE;
  categoryAltId: UUID;
  link: string;
  isDraft: boolean;
  isDirectLinkEnabled: boolean;
  isEmbedEnabled: boolean;
  hasPhoto: boolean;
  sortOrder?: number;
  isFeatured: boolean;
  isDeleted: boolean;
  isEditable: boolean;
  socialPlatform: SOCIAL_PLATFORM;
  userId: ID;
  createdUtc: string;
  updatedUtc: string;
  imageUpdatedUtc: string;
};

export type TContent = Array<{
  content: TContentItem | TContent;
  childCount: 0;
  imageCount: 0;
  videoCount: 0;
  contentSettings: {};
}>;


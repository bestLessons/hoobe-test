import { ID, UUID } from './global.types';
import { SOCIAL_PLATFORM } from './socialPlatform.types';

export enum USER_TYPE {
  DEVELOPER = 1,
}

export type TUser = {
  id: ID;
  fullName: string;
  handle: string;
  altId: UUID;
  userType: USER_TYPE;
  categoryId: ID;
  urlPath: string;
  hasPhoto: boolean;
  about: string;
  createdUtc: string;
  updatedUtc: string;
  imageUpdatedUtc: string;
};

export type TUserSocialPlatform = {
  id: ID;
  altId: UUID;
  userId: ID;
  socialPlatform: SOCIAL_PLATFORM;
  link: string;
  createdUtc: string;
  handle?: string;
};

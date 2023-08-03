import { TContent } from './builder.types';
import { TUser, TUserSocialPlatform } from './user.types'

export type TPageData = {
  user: TUser;
  userSocialPlatform: TUserSocialPlatform[];
  content: TContent;
}
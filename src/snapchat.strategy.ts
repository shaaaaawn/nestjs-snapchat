import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-snapchat';

@Injectable()
export class SnapStrategy extends PassportStrategy(Strategy, 'snapchat') {
  constructor() {
    super({
      clientID: process.env.SNAP_CLIENT_ID,
      clientSecret: process.env.SNAP_KEY,
      callbackURL: process.env.BASE_API_URL + 'auth/snapchat/callback',
      profileFields: ['id', 'displayName', 'bitmoji'],
      scope: ['user.display_name', 'user.bitmoji.avatar'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile,
    cb,
  ): Promise<any> {
    console.log(profile);
    const user = {
      ...profile,
      accessToken: refreshToken,
      refreshToken: accessToken,
    };
    return user;
  }
}

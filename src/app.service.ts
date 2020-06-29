import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  snapchatLogin(req) {
    if (!req.user) {
      return 'No Snapchat User';
    }

    return {
      message: 'Snapchat User Profile',
      user: req.user,
    };
  }
}

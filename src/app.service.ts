import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly data = [
    {
      success: true,
      data: {
        service: 'purchase-api',
        version: '1.0.0',
      },
    },
  ];
  getHello(): string {
    return 'Hello NestJS';
  }
}

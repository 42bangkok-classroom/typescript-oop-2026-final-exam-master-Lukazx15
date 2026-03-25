import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('Method not implemented.');
  }
  private readonly Data = {
    success: true,
    data: {
      service: 'purchase-api',
      version: '1.0.0',
    },
    message: 'Hello NestJS',
  };
  return: any;
}

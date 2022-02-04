import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getData(): string {
    return 'Hello from service';
  }
}

import { Controller, Get } from '@nestjs/common';
// import { zip } from 'rxjs';
// import { map } from 'rxjs/operators';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping-jonnxor-is')
  pingServiceJonnXorIs() {
    return this.appService.pingServiceJonnXorIs();
  }
}

/*
  Composing Requests
  Link: https://www.thisdot.co/blog/build-an-api-gateway-with-nestjs-in-10-minutes

  @Get("/ping-a")
  pingServiceA() {
    return this.appService.pingServiceA();
  }

  @Get("/ping-b")
  pingServiceB() {
    return this.appService.pingServiceB();
  }

  @Get("/ping-all")
  pingAll() {
    return zip(
      this.appService.pingServiceA(),
      this.appService.pingServiceB()
    ).pipe(
      map(([pongServiceA, pongServiceB]) => ({
        pongServiceA,
        pongServiceB
      }))
    );
  }
*/

import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Thread } from 'src/dtos/thread';

@Controller("section")
export class ThreadsController {
  @Get(":section/:thread") // получить определённый раздел
  @ApiOperation({ summary: "Returns a thread from specified section" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Thread] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  getThreadBySection(@Param() params: any): string {
    return params;
    //return this.appService.getHello();
  }
}


import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Thread } from 'src/dtos/thread';
import { ThreadsService } from 'src/services/threads';

@Controller("sections")
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) { }

  @Get(":section/threads/") // получить ветки из раздела
  @ApiOperation({ summary: "Returns a threads from specified section" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Thread] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  async getThreadsBySection(@Param("section") section: number): Promise<Array<Thread>> {
    if (!isNaN(Number(section))) {
      const threads = await this.threadsService.getThreads(Number(section));
      return threads;
    }
    else throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
  }

  @Post(":section/threads") // создать ветку в разделе
  @ApiOperation({ summary: "Posts a thread in specified section" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Thread })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  async postThreadBySection(@Param("section") section: string, @Body("tags") tags: Array<string>, @Body("title") title: string, @Body("content") content: { text: string, images: Array<string> }): Promise<Thread> {
    if (!isNaN(Number(section))) {
      const thread = await this.threadsService.postThread(Number(section), tags, title, content);

      return thread;
    }
    else throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
  }
}


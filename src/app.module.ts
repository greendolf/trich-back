import { Module } from '@nestjs/common';
import { SectionsController } from './controllers/sections';
import { SectionsService } from './services/sections';
import { ThreadsController } from './controllers/threads';
import { ThreadsService } from './services/threads';
// orm
@Module({
  imports: [],
  controllers: [SectionsController, ThreadsController], // injection
  providers: [SectionsService, ThreadsService],
})
export class AppModule {}

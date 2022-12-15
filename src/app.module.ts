/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http.module';
import { PrismaService } from './infra/prisma.service';
import { AppController } from './infra/app.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

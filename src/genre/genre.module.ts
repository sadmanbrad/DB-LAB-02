import { Module } from '@nestjs/common';
import GenreService from './genre.service';
import GenreController from './genre.controller';

@Module({
  imports: [],
  controllers: [GenreController],
  providers: [GenreService],
})
export default class GenreModule { }
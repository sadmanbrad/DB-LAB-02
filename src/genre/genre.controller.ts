import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreService from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';

@Controller('genres')
export default class GenreController {
    constructor(private readonly genreService: GenreService) { }
    @Post()
    postGenre(@Body() genre: CreateGenreDto) {
        return this.genreService.insert(genre);
    }
    @Get()
    getAll() {
        return this.genreService.getAllGenre();
    }
}
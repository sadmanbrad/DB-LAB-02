import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import GenreService from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('genres')
export default class GenreController {
    constructor(private readonly genreService: GenreService) { }

    @ApiOperation({ description: 'Creates a new genre' })
    @ApiCreatedResponse({ description: 'Genre created successfully' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post()
    postGenre(@Body() genre: CreateGenreDto) {
        return this.genreService.insert(genre);
    }

    @ApiOperation({ description: 'Retrieves list of all genres' })
    @ApiOkResponse({ description: 'Genres retrieved successfully' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.genreService.getAllGenre();
    }
}
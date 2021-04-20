import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export default class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @ApiOperation({ description: 'Creates a new book' })
    @ApiCreatedResponse({ description: 'Book created successfully' })
    @Post()
    postBook(@Body() book: CreateBookDto) {
        return this.booksService.insert(book);
    }

    @ApiOperation({ description: 'Retrieves list of all books' })
    @ApiOkResponse({ description: 'Books retrieved successfully' })
    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }
}
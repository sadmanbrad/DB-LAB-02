import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export default class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Post()
    postBook(@Body() book: CreateBookDto) {
        return this.booksService.insert(book);
    }

    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }
}
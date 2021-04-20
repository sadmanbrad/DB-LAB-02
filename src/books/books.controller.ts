import { Body, Controller, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
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

    @ApiOperation({ description: 'Updates the details of a book' })
    @ApiOkResponse({ description: 'Book updated successfully' })
    @Put(':bookID')
    updateBook(@Param('bookID') bookID: number, @Body() book: CreateBookDto) {
        return this.booksService.update(bookID, book);
    }

    @ApiOperation({ description: 'Deletes a book' })
    @ApiOkResponse({ description: 'Book deleted successfully' })
    @Delete(':bookID')
    deleteBook(@Param('bookID') bookID: number) {
        this.booksService.delete(bookID);
    }
}
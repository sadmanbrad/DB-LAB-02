import { Body, Controller, Delete, Get, Header, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export default class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @ApiOperation({ description: 'Creates a new book' })
    @ApiCreatedResponse({ description: 'Book created successfully' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post()
    postBook(@Body() book: CreateBookDto) {
        return this.booksService.insert(book);
    }

    @ApiOperation({ description: 'Retrieves list of all books' })
    @ApiOkResponse({ description: 'Books retrieved successfully' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }

    @ApiOperation({ description: 'Updates the details of a book' })
    @ApiOkResponse({ description: 'Book updated successfully' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put(':bookID')
    updateBook(@Param('bookID') bookID: number, @Body() book: CreateBookDto) {
        return this.booksService.update(bookID, book);
    }

    @ApiOperation({ description: 'Deletes a book' })
    @ApiOkResponse({ description: 'Book deleted successfully' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete(':bookID')
    deleteBook(@Param('bookID') bookID: number) {
        this.booksService.delete(bookID);
    }
}
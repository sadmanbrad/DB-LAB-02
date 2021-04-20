import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @ApiOperation({ description: 'Creates a new user' })
    @ApiCreatedResponse({ description: 'User created successfully' })
    @Post()
    postUser(@Body() user: CreateUserDto) {
        return this.usersService.insert(user);
    }

    @ApiOperation({ description: 'Retrieves the list of all existing users' })
    @ApiOkResponse({ description: 'Users retrieved successfully' })
    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({ description: 'Retrieves all books which are associated with the user' })
    @ApiOkResponse({ description: 'User books retrieved successfully' })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiParam({
        name: 'userID',
        description: 'ID of the user whose books is requested',
        schema: { type: 'integer', example: 1 }
    })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get(':userID/books')
    getBooks(@Param('userID', ParseIntPipe) userID: number) {
        return this.usersService.getBooksOfUser(userID);
    }
}
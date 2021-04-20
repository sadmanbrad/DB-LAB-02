import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
} 
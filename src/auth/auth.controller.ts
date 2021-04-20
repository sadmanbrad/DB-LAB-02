import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginDto from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() loginRequest: LoginDto) {
        const user = this.authService.validateUser(loginRequest.name, loginRequest.password);
        return this.authService.login(user);
    }
}

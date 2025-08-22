import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  
    @Get()
    async getUsers() {
        return this.userService.getUser();
    }

    
    @Post('register')
    async register(@Body() userDto: User) {
        return this.userService.register(userDto);
    }

    @Post('login')
    async login(@Body() userDto: User) {
        return this.userService.login(userDto);
    }
}

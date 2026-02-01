import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService) {
        this.authService = authService;
        this.userService = userService;
    }
    @Post('/login')
    Login(@Body() body: any){

    }
    @Post('/register')
    Register(@Body() body: any): void{
        
    }
}


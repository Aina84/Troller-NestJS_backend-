import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('/login')
    Login(@Body() body: any){
        
    }
    @Post('/register')
    Register(@Body() body: any): void{

    }
}


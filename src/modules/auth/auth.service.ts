import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(email);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(loginUserDto: LoginUserDto) {
        const user = await this.validateUser(loginUserDto.email, loginUserDto.password);
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }
        
        const payload = { email: user.email, sub: user.id };
        const { password, ...result } = user;
        
        return {
            access_token: this.jwtService.sign(payload),
            user: result
            }
        };

    async register(registerUserDto: RegisterUserDto): Promise<any> {
        const existingUser = await this.userService.findOneByEmail(registerUserDto.email);
        if (existingUser) {
            throw new UnauthorizedException('User with this email already exists');
        }
        const user = await this.userService.create(registerUserDto);
        const { password, ...result } = user;
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user: result,
        };
    }
}

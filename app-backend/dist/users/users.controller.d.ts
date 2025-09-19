import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    findUsers(paginationDto: PaginationDto): Promise<{
        data: [{
            id: number;
            name: string;
            username: string;
            role: import("generated/prisma").$Enums.role;
        }[]];
        limit: number;
        offset: number;
    }>;
    updateUser(id: number): string;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}

import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationDto } from "src/common/dto/pagination.dto";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: [{
            id: number;
            name: string;
            username: string;
            role: import("generated/prisma").$Enums.role;
        }[]];
        limit: number;
        offset: number;
    }>;
    update(): Promise<void>;
    delete(id: number): Promise<{
        message: string;
    }>;
}

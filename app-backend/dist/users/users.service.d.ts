import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { HashingServiceProtocol } from "src/auth/hash/hashing.service";
export declare class UsersService {
    private readonly prisma;
    private readonly hashingService;
    constructor(prisma: PrismaService, hashingService: HashingServiceProtocol);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: [{
            name: string;
            username: string;
            role: import("generated/prisma").$Enums.role;
            id: number;
        }[]];
        limit: number;
        offset: number;
    }>;
    update(): Promise<void>;
    delete(id: number): Promise<{
        message: string;
    }>;
}

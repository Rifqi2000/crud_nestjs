import { UserController } from "./users.controller";
import { Module } from "@nestjs/common";
import { UserService } from "./users.service";


@Module({
    controllers:[UserController],
    providers: [UserService]
})

export class UserModule{}
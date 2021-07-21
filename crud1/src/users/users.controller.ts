import { UserService } from "./users.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get()
    getUsers(){
        return 'Hello';
    }

    @Post()
    insertUser(
        @Body('name') name: string,
        @Body('age') age:number,
        @Body('surname') surname: string,
        @Body('name') email:string,
    ){
        const userId = this.userService.insertUser(name, age, surname, email);
        return{
            id:userId,
        };
    }

    @Get()
    getAllUsers(){
        return this.userService.getUsers();
    }

    @Get(':userId')
    getUser(
        @Param('userId') userId:string
    ){
        return this.userService.getUser(userId);
    }

    @Put(':userId')
    updateUser(
        @Param('userId') userId:string,
        @Body('name') name: string,
        @Body('age') age:number,
        @Body('surname') surname:string,
        @Body('email') email:string
    ){
        return this.userService.updateUser(userId,name,age,surname,email);
    };

    @Delete(':userId')
    deleteUser(@Param('userId') userId:string){
        this.userService.deleteUser(userId);
    }
}
import { EntityNotFoundError } from "typeorm";
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common"; 

@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
    catch(error: EntityNotFoundError, host:ArgumentsHost){
        const response = host.switchToHttp().getResponse();
        response.status(HttpStatus.NOT_FOUND).json({
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Not Found'
        })
    }
}
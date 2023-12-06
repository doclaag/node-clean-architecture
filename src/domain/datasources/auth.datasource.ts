import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AuthDatasource {

    //TODO:
    // abstract loginUser(loginUserDto: LoginUserDto): Promise<any>;

    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
};
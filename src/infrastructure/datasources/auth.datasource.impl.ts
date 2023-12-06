import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from '../../domain';


export class AuthDatasourceImpl implements AuthDatasource {

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;

        try {

            const user = new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE']
            );
            return user;
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
}
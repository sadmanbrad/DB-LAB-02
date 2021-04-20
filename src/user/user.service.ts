import { Injectable } from '@nestjs/common';
import UserEntity from '../db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/entity/book.entity';
import { getConnection } from "typeorm";

@Injectable()
export class UserService {

    async insert(userDetails: CreateUserDto): Promise<UserEntity> {
        const userEntity: UserEntity = UserEntity.create();
        const { name, password } = userDetails;
        userEntity.name = name;
        userEntity.password = password;
        await UserEntity.save(userEntity);
        return userEntity;
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await UserEntity.find();
    }

    async getBooksOfUser(userID: number): Promise<BookEntity[]> {
        console.log(typeof (userID));
        const user: UserEntity = await UserEntity.findOne({ where: { id: userID }, relations: ['books'] });
        return user.books;
    }

    async findOne(username: string): Promise<UserEntity | undefined> {
        return UserEntity.findOne({ where: { name: username } });
    }
}
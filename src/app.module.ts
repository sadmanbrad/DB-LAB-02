import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { AuthModule } from './auth/auth.module';
import BooksModule from './Books/books.module';
import GenreModule from './Genre/genre.module';
import UserEntity from './db/entity/user.entity';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';

@Module({
    imports: [UserModule,
        BooksModule,
        GenreModule,
        TypeOrmModule.forFeature(
            [UserEntity, BookEntity, GenreEntity],
        ),

        TypeOrmModule.forRoot(),

        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
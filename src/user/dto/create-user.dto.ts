import { ApiProperty } from "@nestjs/swagger";

export default class CreateUserDto {
    @ApiProperty({
        description: 'The name of the user', example: 'Username'
    })
    readonly name: string;

    @ApiProperty({
        description: 'The password of the user', example: 'password'
    })
    readonly password: string;

    @ApiProperty({
        description: 'ID of the books that this user owns',
        type: 'array', items: { type: 'integer' }
    })
    readonly books: number[];
}
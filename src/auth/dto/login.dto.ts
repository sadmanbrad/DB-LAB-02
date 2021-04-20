import { ApiProperty } from "@nestjs/swagger";

export default class LoginDto {
    @ApiProperty({
        description: 'The name of the user', example: 'Username'
    })
    readonly name: string;

    @ApiProperty({
        description: 'The password of the user', example: 'password'
    })
    readonly password: string;
}
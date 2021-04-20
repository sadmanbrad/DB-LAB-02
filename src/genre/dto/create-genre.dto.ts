import { ApiProperty } from "@nestjs/swagger";

export default class CreateGenreDto {
    @ApiProperty({
        description: 'The name of the genre', example: 'Fiction'
    })
    readonly type: string;
}
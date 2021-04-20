import { ApiProperty } from "@nestjs/swagger";

export default class CreateGenreDto {
    @ApiProperty({
        description: 'The name of the genre', default: 'Fiction'
    })
    readonly type: string;
}
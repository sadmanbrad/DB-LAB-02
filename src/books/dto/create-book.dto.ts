import { ApiProperty } from "@nestjs/swagger";

export default class CreateBookDto {
    @ApiProperty({
        description: 'The name of the book', example: 'Invisible Man'
    })
    readonly name: string;

    @ApiProperty({
        description: 'ID of the user to whom this book belongs', example: '1'
    })
    readonly userID: number;

    @ApiProperty({
        description: 'List of genre ids that this book belongs to',
        type: 'array', items: { type: 'integer' }
    })
    readonly genreIDs: number[];
}
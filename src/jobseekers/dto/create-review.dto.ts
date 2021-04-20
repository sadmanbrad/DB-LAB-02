import { ApiProperty } from "@nestjs/swagger";

export default class CreateReviewDto {
    @ApiProperty({
        description: 'Id of the employer writing this review', example: '1'
    })
    readonly authorID: number;

    @ApiProperty({
        description: 'Rating', example: '5', minimum: 1, maximum: 5
    })
    readonly rating: number;

    @ApiProperty({
        description: 'Details of the rating', example: ''
    })
    readonly details: string;
}
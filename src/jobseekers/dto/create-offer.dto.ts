import { ApiProperty } from "@nestjs/swagger";

export default class ReviewDto {
    @ApiProperty({
        description: 'ID of the freelancer creating the offer', example: '1'
    })
    readonly freelancerID: number;

    @ApiProperty({
        description: 'Message to the employer', example: 'I will do my best', maxLength: 500
    })
    readonly message: string;

    @ApiProperty({
        description: 'Date of creation'
    })
    readonly creationDate: Date;
}
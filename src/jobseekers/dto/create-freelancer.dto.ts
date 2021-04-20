import { ApiProperty } from "@nestjs/swagger";

export default class CreateFreelancerDto {
    @ApiProperty({
        description: 'Freelancer name', example: 'John'
    })
    readonly name: string;

    @ApiProperty({
        description: 'Biography', example: 'A developer'
    })
    readonly bio: string;

    @ApiProperty({
        description: 'List of skills',
        type: 'array', items: { type: 'string' }
    })
    readonly skills: number[];
}
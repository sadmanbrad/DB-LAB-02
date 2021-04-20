import { ApiProperty } from "@nestjs/swagger";

export default class CreateProjectDto {
    @ApiProperty({
        description: 'ID of the employer that owns this project', example: '1'
    })
    readonly employerID: number;

    @ApiProperty({
        description: 'Project Title', example: 'Sample Project', maxLength: 64
    })
    readonly title: string;

    @ApiProperty({
        description: 'ID of the category this project belongs to', example: '1'
    })
    readonly categoryID: number;

    @ApiProperty({
        description: 'Details of the project', example: ''
    })
    readonly details: string;

    @ApiProperty({
        description: 'Project budget', example: '1000'
    })
    readonly budget: number;

    @ApiProperty({
        description: 'List of skills that are related to this project',
        type: 'array', items: { type: 'string' }
    })
    readonly relatedSkills: number[];
}
import { ApiProperty } from "@nestjs/swagger";

export default class AddExperienceDto {

    @ApiProperty({
        description: 'Experience title', example: 'Sample Project', maxLength: 64
    })
    readonly title: string;

    @ApiProperty({
        description: 'Details of the experice', example: '', maxLength: 500
    })
    readonly details: string;

    @ApiProperty({
        description: 'List of skill ids that are related to this experience',
        type: 'array', items: { type: 'integer' }
    })
    readonly relatedSkillIDs: number[];
}
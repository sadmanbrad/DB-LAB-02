import { ApiProperty } from "@nestjs/swagger";

export default class CreateEmployerDto {
    @ApiProperty({
        description: 'Employer name', example: 'John'
    })
    readonly name: string;
}
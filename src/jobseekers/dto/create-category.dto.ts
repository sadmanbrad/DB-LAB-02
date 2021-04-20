import { ApiProperty } from "@nestjs/swagger";

export default class CreateCategoryDto {
    @ApiProperty({
        description: 'Category name', example: 'John'
    })
    readonly name: string;
}
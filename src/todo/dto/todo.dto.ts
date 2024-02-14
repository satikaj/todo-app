import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { Priority } from '../model/type/priority.enum';
import { Category } from '../model/type/category.enum';
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty({ example: 'Painting class', required: true })
  @IsNotEmpty()
  @MaxLength(30)
  title: string;

  @ApiProperty({ example: 'Bring painting materials', required: false })
  @IsOptional()
  @MaxLength(300)
  notes: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  dueDate: Date;

  @ApiProperty({ example: 'high', required: false })
  @IsOptional()
  @IsEnum(Priority, {
    message: 'priority must be one of the following values: high, medium, low',
  })
  priority: Priority;

  @ApiProperty({ example: 'personal', required: false })
  @IsOptional()
  @IsEnum(Category, {
    message:
      'category must be one of the following values: personal, work, school, social, miscellaneous',
  })
  category: Category;

  @ApiProperty({ example: 'false', required: false })
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AccountForPost {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email phải đúng định dạng.' })
  email: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
  })
  myself: string;
}

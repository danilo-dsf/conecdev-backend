import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl } from 'class-validator';
import { Match } from '../../../utils/decorators/match.decorator';

export class ICreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Match('password')
  password_confirmation: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  occupation?: string;

  @IsOptional()
  @IsString()
  biography?: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber('BR')
  phone?: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  linkedin?: string;
}

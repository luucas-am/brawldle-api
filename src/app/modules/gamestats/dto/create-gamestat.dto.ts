import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { GameType } from '../schemas/gamestat.schema';

class AttemptDto {
  @IsString()
  guess: string;

  @IsString()
  result: string;
}

export class CreateGameStatDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(GameType)
  gameType: GameType; 

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttemptDto)
  attempts: AttemptDto[];

  @IsBoolean()
  won: boolean;
}

import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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

  @IsString()
  brawlerOfTheDay: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttemptDto)
  attempts: AttemptDto[];

  @IsInt()
  attemptCount: number;

  @IsBoolean()
  won: boolean;
}

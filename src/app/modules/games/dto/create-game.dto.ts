import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsEnum, IsNotEmpty } from "class-validator";
import { GameMode } from "@prisma/client";

export class CreateGameDto {
  @ApiProperty({
    description: "The mode of the game",
    enum: GameMode,
  })
  @IsEnum(GameMode)
  @IsNotEmpty()
  mode: GameMode;

  @ApiProperty({
    description: "Description of the game",
    required: false,
    example: "El Primo grabs the closest enemy within his reach and flips them like a pancake over his broad shoulders.",
    type: String,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: "ID of the brawler used in the game",
    example: "cmcy8ebub000008jyd6u80gtc",
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  brawlerId: string;
}
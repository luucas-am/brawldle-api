import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateGameDto {
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
  @IsOptional()
  brawlerId?: string;
}
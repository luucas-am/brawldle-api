import { ApiProperty } from "@nestjs/swagger";
import { Brawler, GameMode } from "@prisma/client";
import { GetBrawlerDto } from "../../brawlers/dtos/get-brawler.dto";

export class GetGameDto {
  @ApiProperty({
    description: "Unique identifier for the game",
    example: "cmcy8ebub000008jyd6u80gtc",
    required: true,
  })
  id: string;

  @ApiProperty({
    description: "Mode of the game",
    enum: GameMode,
    example: GameMode.LIMITED,
    required: true,
  })
  mode: GameMode;

  @ApiProperty({
    description: "Description of the game",
    example: "El Primo grabs the closest enemy within his reach and flips them like a pancake over his broad shoulders.",
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: "ID of the brawler associated with the game",
    example: "cmcy8ebub000008jyd6u80gtc",
    required: true,
  })
  brawlerId: string;

  @ApiProperty({
    description: "Brawler used in the game",
    type: GetBrawlerDto,
    required: true,
  })
  brawler: Brawler;

  @ApiProperty({
    description: "Timestamp when the game was created",
    example: "2023-10-01T12:00:00Z",
    required: true,
  })
  createdAt: Date;
}
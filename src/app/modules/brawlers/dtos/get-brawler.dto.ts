import { ApiProperty } from "@nestjs/swagger";

export class GetBrawlerDto {
  @ApiProperty({
    description: "Unique identifier for the brawler",
    example: "cmcy8ebub000008jyd6u80gtc",
    type: String,
    required: true,
  })
  id: string;

  @ApiProperty({
    description: "Name of the brawler",
    example: "El Primo",
    type: String,
  })
  name: string;

  @ApiProperty({
    description: "Role of the brawler",
    example: "Tank",
    type: String,
    required: true,
  })
  role: string;

  @ApiProperty({
    description: "Release year of the brawler",
    example: 2020,
    type: Number,
    required: true,
  })
  releaseYear: number;

  @ApiProperty({
    description: "Gender of the brawler",
    example: "Male",
    type: String,
    required: true,
  })
  gender: string;

  @ApiProperty({
    description: "Brawler's image URL",
    example: "https://example.com/brawlers/el_primo.png",
    type: String,
    required: true,
  })
  imageUrl: string;
}
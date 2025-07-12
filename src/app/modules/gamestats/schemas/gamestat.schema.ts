import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameStatDocument = GameStat & Document;

@Schema({ timestamps: true })
export class GameStat {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  brawlerOfTheDay: string;

  @Prop({
    type: [
      {
        guess: String,
        result: String,
      },
    ],
    default: [],
  })
  attempts: { guess: string; result: string }[];

  @Prop()
  attemptCount: number;

  @Prop()
  won: boolean;

  @Prop({ default: Date.now })
  playedAt: Date;
}

export const GameStatSchema = SchemaFactory.createForClass(GameStat);

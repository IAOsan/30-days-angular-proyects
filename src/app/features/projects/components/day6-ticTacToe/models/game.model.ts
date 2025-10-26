import { IPlayer } from "./player.model";

export type GameStatusType = 'idle' | 'playing' | 'won' | 'draw';
type ScoreKeyType = IPlayer['id'] | 'ties';
export type ScoreType = Map<ScoreKeyType, number>;
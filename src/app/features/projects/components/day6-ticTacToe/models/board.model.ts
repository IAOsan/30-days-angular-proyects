import { IPlayer } from './player.model';

export interface IBoardCell {
  id: number;
  value: IPlayer['id'] | null;
}

export type BoardCellCoordsType = {
  id: number;
  x: number;
  y: number;
  value: IPlayer['id'] | null;
};

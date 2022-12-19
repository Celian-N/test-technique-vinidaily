export interface Wine {
  _id: string;
  millesimed: boolean;
  year: number;
  grapeVarieties: string;
  logo: string;
  size: number;
  region: string;
  agingPotential: number;
  name: string;
  description: string;
  type: string;
  cuve: string;
  cru: string;
  appelation: string;
  appelationType: string;
  price: number;
  note: number;
  winePaired: string[];
}

import { TypeName, Weather } from "../utils/calc/data/interface";

export type ReportProps = {
  name: string;
  teraType: TypeName;
  ability: string;
  nature: string;
  item: string;
  move: string;
  category: string;
  mechanic: string;
  crit: boolean;
  //baseAtk: string;
  boostAtk: string;
  evAtk: string;
  ivAtk: string;
  //baseSpa: string;
  boostSpa: string;
  evSpa: string;
  ivSpa: string;
  target: "Singles" | "Doubles";
  selectPokemon: string;
  defenderList: string;
  boostDef: string;
  boostSpd: string;
  weather: "none" | Weather;
  terrain: string;
  fairy: boolean;
  dark: boolean;
  break: boolean;
  spikes: string;
  helpingHand: boolean;
  gravity: boolean;
  protect: boolean;
  stealthRock: boolean;
  foresight: boolean;
  reflect: boolean;
  lightScreen: boolean;
  auroraVeil: boolean;
  battery: boolean;
  friendGuard: boolean;
  tailwind: boolean;
  vessel: boolean;
  tablets: boolean;
  sword: boolean;
  beads: boolean;
  hits: string;
};

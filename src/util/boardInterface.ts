import { Member } from "./memberInterface";

export interface Board {
  board: BoardTitle;
  cards?: Card[];
}

export interface BoardTitle {
  title: string;
  color: string;
}
export interface Card {
  image?: Image;
  tags: Tags;
  title: Title;
  description: Description;
  members: Member[];
  comments?: Comment[];
  likes?: Like[];
}

export type Image = string;

export type Tags = string[];

export type Title = string;

export type Description = string;

export interface Comment {
  name: string;
  image: string;
  comment: string;
  date: number;
}

export type Like = string;

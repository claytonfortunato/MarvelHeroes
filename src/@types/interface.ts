import { ChangeEventHandler } from "react";

export interface PropsData {
  name: string;
  title: string;
  urls: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ComicsData {
  title: string;
  thumbnail: string;
}

export interface CharData {
  name: string;
  image: string;
}

export interface PropsInput {
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

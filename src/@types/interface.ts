import { ChangeEventHandler } from "react";

export interface PropsData {
  id: string;
  name: string;
  title: string;
  urls: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ComicsInterface {
  image: string;
  title: string;
}

export interface PropsInput {
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

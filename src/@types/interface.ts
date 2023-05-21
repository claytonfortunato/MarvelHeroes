import { ChangeEventHandler } from "react";

export interface PropsData {
  id: number;
  name: string;
  title: string;
  urls: any;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CreatorData {
  id: number;
  firstName: string;
  urls: any;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface PropsInput {
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

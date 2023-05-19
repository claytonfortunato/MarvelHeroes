import { ChangeEventHandler } from "react";

export interface PropsData {
  name: string;
  title: string;
  urls: any;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CreatorData {
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

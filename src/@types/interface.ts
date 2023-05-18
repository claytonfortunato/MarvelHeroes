export interface PropsData {
  id: string;
  name: string;
  title: string;
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
}

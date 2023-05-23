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

export type SearchProps = {
  placeholder?: string;
  value?: string;
  search: (e: any) => void;
};

export interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: any;
}

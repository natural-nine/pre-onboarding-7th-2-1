export interface menuTypes {
  title: string;
  value: string;
  isMenu: boolean;
  id: number;
}

export interface menuStateTypes {
  menuState: menuTypes[];
  isSegment: string;
}

export type actionsTypes = {} | {};

export interface OptionsTypes {
  menuList: menuTypes[];
  menuToggleClick: (id: number, value: string) => void;
}

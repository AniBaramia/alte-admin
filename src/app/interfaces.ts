export interface Member {
  id?: number;
  img?: string;
  name?: string;
  title?: string;
  type?: string;
}

export interface Partner {
  id?: number;
  img?: string;
  name?: string;
  type?: string;
  website?: string;
}

export interface User {
  name?: string;
  email?: string;
  message?: string;
}

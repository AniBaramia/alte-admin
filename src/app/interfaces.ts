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

export interface Admission {
  id: number;
  title: string;
  description: string;
  content: string;
}

export interface Program {
  id?:number;
  name?:string;
  url?:string;
  img?:string;
  type?:string;
}
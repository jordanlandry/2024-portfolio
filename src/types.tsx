export type ProjectType = {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  demoText?: string;
  thumbnail: string;
};


export type WorkType = {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  description: string;
  techStack: string[];
  logo: string;
  linkedin?: string;
}

export type Information = {
  title: string;
  description: string;
  thumbnail?: string;
}

export type RefType<T> = React.MutableRefObject<T>;

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

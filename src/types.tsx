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
  endDate: Date | string;
  description: string;
  techStack: string[];
  logo: string;
  linkedin?: string;
};

export type TechnologyType = {
  name: string;
  icon: string;
  projects?: {
    title: string;
    description: string;
    thumbnail: string;
    screenshot: string;
    github?: string;
  }[];
};

export type Information = {
  title: string;
  description: string;
  thumbnail?: string;
};

export type RefType<T> = React.MutableRefObject<T>;
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

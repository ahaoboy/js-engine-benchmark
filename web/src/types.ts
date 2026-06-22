export type DataItem = {
  time: number;
  data: Record<string, Record<string, string>>;
};

export type Serie = {
  name: string;
  type: string;
  smooth: boolean;
  data: (number | undefined)[];
};

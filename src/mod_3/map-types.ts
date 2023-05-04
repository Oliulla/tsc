// mapped type in tsc
type volume = {
  height: number;
  width: number;
  depth: number;
};

type AreaString = {
  height: string;
  width: string;
};

// mapped type
type Area<T> = {
  //[key in keyof volume]: volume[key];
  readonly [key in keyof T]: T[key];
};

const area1: Area<volume> = {
  height: 23,
  width: 10,
  depth: 18,
};

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const reactangularArea: AreaReadOnly = {
  height: 10,
  width: 8,
};
// reactangularArea.height = 20;

// type W = keyof AreaNumber; // 'height' | 'width'
// type H = AreaNumber["height"]; // look up type

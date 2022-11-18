import { rgbObject } from './interface';

export function dec2Hex(dec: number) {
  const hex = Math.abs(dec).toString(16);
  return hex;
}

export function rgb2HexColors(obj: rgbObject) {
  const hexR = dec2Hex(obj.r);
  const hexG = dec2Hex(obj.g);
  const hexB = dec2Hex(obj.b);
  const hexcode = `#${hexR}${hexG}${hexB}`;
  return hexcode;
}

export function generateRandomColor() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
    answer: '',
  };
}

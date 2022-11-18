import { Dispatch, SetStateAction, useEffect } from 'react';
import NonSSRWrapper from '../noSsr';

import { generateRandomColor, rgb2HexColors } from './functions';
import { rgbObject } from './interface';

export default function ColorGenerator(props: {
  color: rgbObject;
  setColor: Dispatch<SetStateAction<rgbObject>>;
}): JSX.Element {
  useEffect(() => {
    const generatedColorRgbColor = generateRandomColor();
    props.setColor(generatedColorRgbColor);
  }, []);

  return (
    <NonSSRWrapper>
      <div
        className='m-10 w-32 h-32 rounded'
        style={{ backgroundColor: rgb2HexColors(props.color) }}
      />
    </NonSSRWrapper>
  );
}

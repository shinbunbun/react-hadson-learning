import React from 'react';
import Color from './Color';
import { useColors } from './color-hooks';

export default function ColorList() {
  const { colors } = useColors();
  return (
    <div>
      {
        colors.map(color => (
          <Color key={color.id} {...color} />
        ))
      }
    </div>
  )
}

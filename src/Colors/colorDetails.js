import React from 'react';
import { useParams } from 'react-router-dom';
import { useColors } from './hooks';

function ColorDetails() {
  const { id } = useParams();
  const { colors } = useColors();

  const foundColor = colors.find(
    (color) => color.id === id,
  );

  return (
    <div>
      <div
        style={{
          backgroundColor: foundColor.color,
          height: 100,
          width: 100,
        }}
      />
      <h1>{foundColor.title}</h1>
      <h1>{foundColor.color}</h1>
    </div>
  );
}

export default ColorDetails;

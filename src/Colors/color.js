/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { memo, useCallback } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useColors } from './hooks';
import StarRating from './starRating';

const Trash = memo(FaTrash);
const Rating = memo(StarRating);

export default memo(
  ({
    id, title, color, rating = 0,
  }) => {
    const { rateColor, removeColor } = useColors();

    const rate = useCallback(
      (rating) => rateColor(id, rating),
      [],
    );

    const navigate = useNavigate();

    return (
      <section
        className="color"
        onClick={() => navigate(`/${id}`)}
      >
        <h1>{title}</h1>
        <button
          type="button"
          onClick={() => removeColor(id)}
        >
          <Trash color="red" />
        </button>
        <div
          style={{
            height: 50,
            backgroundColor: color,
          }}
        />
        <Rating selected={rating} onChange={rate} />
      </section>
    );
  },
  (prevProps, nextProps) => {
    console.log(prevProps.rating, nextProps.rating);
    return prevProps.rating === nextProps.rating;
  },
);

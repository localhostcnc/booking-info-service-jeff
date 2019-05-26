/* eslint-disable react/prop-types */
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);


const RenderStars = (props) => {
  const { count } = props;
  const renderRating = count * 100 / 5 || 0;

  const TealStars = {
    display: 'flex',
    width: `${renderRating}%`,
    color: '#368489',
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
  };

  const GrayStars = {
    display: 'flex',
    color: '#E8E8E8',
    position: 'relative',
  };

  return (
    <div style={GrayStars}>
      <FontAwesomeIcon icon="star" size="xs" />
      <FontAwesomeIcon icon="star" size="xs" />
      <FontAwesomeIcon icon="star" size="xs" />
      <FontAwesomeIcon icon="star" size="xs" />
      <FontAwesomeIcon icon="star" size="xs" />
      <div style={TealStars}>
        <FontAwesomeIcon icon="star" size="xs" />
        <FontAwesomeIcon icon="star" size="xs" />
        <FontAwesomeIcon icon="star" size="xs" />
        <FontAwesomeIcon icon="star" size="xs" />
        <FontAwesomeIcon icon="star" size="xs" />
      </div>
    </div>
  );
};

export default RenderStars;

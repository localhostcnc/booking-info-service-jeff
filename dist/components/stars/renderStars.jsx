import React from 'react';

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
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <div style={TealStars}>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
      </div>
    </div>
  );
};

export default RenderStars;

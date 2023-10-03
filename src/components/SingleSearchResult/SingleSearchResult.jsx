import React from 'react'

const SingleSearchResult = ({ data }) => {
  const { title, price, height, width, depth, url, img, furniture_type: furnitureType } = data;

  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <p>{furnitureType}</p>
      <p>{price}</p>
      <p>{`${height}cm x ${width}cm x ${depth}cm`}</p>
      <a href={`https://${url}`} target='_blank' rel='noreferrer'>Check it out</a>
    </div>
  );
}

export default SingleSearchResult;
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { IconButton, Grid, Chip, Paper, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import { firstCharToUC } from '../../helpers';

import './styles.css';

const SingleSearchResult = ({ data }) => {
  const { title, price, height, width, depth, url, img, furniture_type: furnitureType } = data;

  const handleButtonClick = () => {
    return <Navigate to={url} />
  }

  return (
    <Grid container component={Paper} elevation={3} className='outerPaper'>
      <Grid item md={7} component="div" className="details-wrapper" sx={{ flexDirection: 'column' }}>
        <Typography variant="h3" gutterBottom>{title}</Typography>
        <Typography variant="h5" gutterBottom>{price}</Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }} gutterBottom>{`${height}cm x ${width}cm x ${depth}cm`}</Typography>
        <Chip className="furniture-type-chip" sx={{ maxWidth: '30%' }} label={firstCharToUC(furnitureType)} variant="filled" />
      </Grid>
      <Grid item md={5} component="div" className="image-wrapper">
        <img src={img} alt={title} />
      </Grid>
      <Grid item sm={12} component="div" className="links-wrapper">
        <a href={`https://${url}`} target="_blank" rel="noreferrer">
          <IconButton color="info">
              <LanguageIcon />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  );
}

export default SingleSearchResult;
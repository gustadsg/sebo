import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#733840',
  },
  iconHover: {
    color: 'black',
  },
})(Rating);

export default function CustomizedRatings(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="customized-color"
          defaultValue = {props.rate}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          
        />
      </Box>
    </div>
  );
}
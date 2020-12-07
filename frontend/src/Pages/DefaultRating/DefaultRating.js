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
    color: '#733840',
  },
})(Rating);

export default function DefaultRate(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="read-only"
          defaultValue = {props.rate}readOnly
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          
        />
      </Box>
    </div>
  );
}
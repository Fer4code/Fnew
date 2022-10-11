import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import "./experience.css";
import Tooltip from '@mui/material/Tooltip';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 function Cardex(props) {

  return (
    <Grid item align='center' md={4} s={11}>
      <Tooltip title='See the link'>
    <Card sx={{ minWidth: 320, maxWidth: 345 }} style={props.style} onClick={props.onclick}>
      <CardHeader sx={{ pt:1, pl:2, pr:1, pb:0}}
        disableTypography ='true'
        title={
          <Typography align= 'center' gutterBottom = 'false' variant="body" component="h4" style={props.tstyle}>
             {props.edu}
          </Typography>
          }
          subheader = {<>
            <Typography align= 'center' gutterBottom = 'false' variant="subtitle1" component="h4" style={{ fontWeight: 500 }}>
            {props.inst}
            </Typography>
            <Typography align= 'center' gutterBottom = 'false' variant="subtitle1" component="h4" style={props.ystyle}>
            {props.time}
         </Typography>
         </>
            }
            
      >
        
      </CardHeader>
     {/* <CardMedia
        component="img"
        height="350"
        image={props.img}
        alt="WE"
          />*/}
    </Card>
    </Tooltip>
    </Grid>
  );
}
export {Cardex}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item align='center' >
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader sx={{ pt:1, pl:2, pr:1, pb:0}}
        disableTypography ='true'
        title={
          <Typography align= 'center' gutterBottom = 'false' variant="body" component="h4">
             {props.edu}
          </Typography>
          }
          subheader = {<>
            <Typography align= 'center' gutterBottom = 'false' variant="subtitle1" component="h4" style={{ fontWeight: 600 }}>
            {props.inst}
            </Typography>
            <Typography align= 'center' gutterBottom = 'false' variant="subtitle1" component="h4">
            {props.time}
         </Typography>
         </>
            }
            
      >
        
      </CardHeader>
      <CardMedia
        component="img"
        height="150"
        image={props.img}
        alt="WE"
      />
      <CardContent  sx={{ pt:1, pl:2, pr:2, pb:0}}>
        <Typography variant="body2" color="black" align ='justify'>
          {props.shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing='true' sx={{ pt:0, pl:0, pr:15, pb:0}}>
      <Tooltip title={ expanded ? 'Show Less' : 'Show More'}>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
    </Tooltip>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.fullDescTitle}</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
}
export {Cardex}
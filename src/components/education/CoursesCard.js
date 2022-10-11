import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Collapse from '@mui/material/Collapse';



 function CoursesCard(props) {

  return (
    <Grid item align='center' md={4} s={11} >
    <Collapse collapsedSize={props.collapsed} in={props.checked} orientation={props.orientation}>
    <Card sx={{ minWidth: 320, maxWidth: 345 }} style={props.style} onClick={props.onclick}>
      <CardHeader sx={{ pt:1, pl:2, pr:1, pb:0}}
        disableTypography ='true'
        title={
          <Typography align= 'center' gutterBottom = 'false' variant="body" component="h4" style={props.tstyle}>
             {props.edu}
          </Typography>
          }
          subheader = {
            <>
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
    </Card>

    </Collapse>
    </Grid>
  );
}


export {CoursesCard}
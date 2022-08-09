import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import DialogTitle from '@mui/material/DialogTitle';
import {img} from '../../img/gs.png'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { experience } from "./Data"



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Experience() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Container maxWidth="xl">
        <Typography variant="h4" color="initial" className='title'>Work Experience</Typography>
<Grid
  container
  spacing={6}
  direction="row"
  justify="center"
  alignItems="center"
  alignContent="center"
  wrap="nowrap"
  
>
  
{experience.map((data,key) => {
                                return(
                                    <Grid item>

<Card sx={{ minWidth: 350 }}>
      <CardHeader
        title={data.name}
        subheader={data.time}
      />
      <CardMedia
        component="img"
        height="180"
        image= {data.img}
        alt="gs"
      />
      <CardContent>
        <Typography variant="body3" color="text.primary">
        {data.position}
        </Typography>
      </CardContent>
      <CardActions>
      <Typography variant="h6" color="initial" style={{marginLeft:'70px'}} onClick={data.onclick}>See more</Typography>
        <AddCircleOutlineSharpIcon variant="outlined" onClick={data.onclick} fontSize='large'/>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={data.hclose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{data.position}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {data.desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={data.hclose}>Awesome!</Button>

        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
</Grid>
)
})}
</Grid>          
        </Container>

    </div>
  );
}
export {Experience}
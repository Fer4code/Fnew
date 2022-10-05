import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import "./experience.css";
import cardex, { Cardex } from './card'
import img from './gs.jpg'
import fb from './fibex.jpg'

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

 function Experience() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="xl">
    <Typography variant="h4" color="initial" align='center' sx={{ pt:3, pl:2, pr:1, pb:5}}>Work Experience</Typography>
    <Grid
    container
    spacing={6}
    direction="row"
    justify="center"
    alignItems="center"
    justifyContent="space-evenly"
    wrap="nowrap"

    >
      <Cardex 
      job='NA - Technical Support Engineer'
      corp='Grandstream Netwroks, Inc'
      time='Jun 2021 - Present'
      img={img}
      shortDesc='Applying the knowledge about VoIP, SIP, RFC, Working with clients about API integrations from servers to endpoints on differents platforms.'
      fullDescTitle ='Overview'
      fullDescp1=''
      fullDescp2=''
      fullDescp3=''
      fullDescp4=''
      />
      <Cardex 
      job='Wireless Technical Support Lead'
      corp='Fibex Telecom, CA'
      time='March 2021 - May 2021'
      img={fb}
      shortDesc='Deliver the best customer experience for the clients using Wireless internet subscriptions, using the Cambium Networks technology.'
      fullDescTitle ='notOV'
      fullDescp1=''
      fullDescp2=''
      fullDescp3=''
      fullDescp4=''
      />
      <Cardex 
      job='Wireless Technical Installer'
      corp='Fibex Telecom, CA'
      time='Jan 2021 - March 2021'
      img={fb}
      shortDesc='Install, manage and configure different kind of antennas to provide the best experience for end-users and companies through the Wireless ISP.'
      fullDescTitle ='notOV'
      fullDescp1=''
      fullDescp2=''
      fullDescp3=''
      fullDescp4=''
      />
    </Grid>          
        </Container>

  );
}
export {Experience}
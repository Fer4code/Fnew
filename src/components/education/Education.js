import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import "./experience.css";
import cardex, { Cardex } from './card'


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

 function Education() {

  return (
    <Container maxWidth="xl">
    <Typography variant="h4" color="initial" align='center' sx={{ pt:3, pl:2, pr:1, pb:5}}>Education</Typography>
    <Grid
    container
    spacing={2}
    direction="row"
    justify="center"
    alignItems="center"
    justifyContent="space-evenly"
    wrap="nowrap"

    >
 <Cardex 
      edu='Computer Engineer'
      inst='Universidad José Antonio Páez'
      time='Oct 2016 - Jun 2020'
      img=''
      shortDesc='Applying the knowledge about VoIP, SIP, RFC, Working with clients about API integrations from servers to endpoints on differents platforms.'
  
      />
    </Grid>
    <Cardex 
      edu='Computer Engineer'
      inst='Universidad José Antonio Páez'
      time='Oct 2016 - Jun 2020'
      img=''
      shortDesc='Applying the knowledge about VoIP, SIP, RFC, Working with clients about API integrations from servers to endpoints on differents platforms.'
  
      />

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
      edu='Wireless Technical Support Lead'
      inst='Fibex Telecom, CA'
      time='March 2021 - May 2021'
      img=''
      shortDesc='Deliver the best customer experience for the clients using Wireless internet subscriptions, using the Cambium Networks technology.'
      fullDescTitle ='notOV'
      fullDescp1=''
      fullDescp2=''
      fullDescp3=''
      fullDescp4=''
      />
      <Cardex 
      edu='Wireless Technical Installer'
      inst='Fibex Telecom, CA'
      time='Jan 2021 - March 2021'
      img=''
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
export {Education}
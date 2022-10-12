import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import "./experience.css";
import { Cardex } from './card'
import { CoursesCard} from './CoursesCard'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
    <Container disableGutters='true' maxWidth="xl" style={{ width: 'fit-content', maxWidth: "100vw", padding: '20px'}}>
      
    <Typography variant="h4" color="initial" align='center' sx={{ pt:3, pl:2, pr:1, pb:5}}>Education</Typography>
    <Grid
    container
    spacing={4}
    direction="row"
    justify="center"
    alignItems="center"
    justifyContent="space-evenly"
    style={{marginBottom: '30px'}}
    >
    <Cardex 
      edu='Bsc. Computer Engineer'
      inst='Universidad José Antonio Páez'
      time='Oct 2016 - Jun 2020'
      link=''
      style={{backgroundColor: '#6EE6BC'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      />
    
    <Cardex 
      edu='Spec. IBM Applied Art. Intelligence'
      inst='IBM'
      time='Jan 2022'
      link=''
      style={{backgroundColor: '#6DF5FC'}}
      ystyle={{color: '#000000', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/CXMB7MU4AWWS', '_blank')}
      />

      
</Grid>
<Grid
    container
    spacing={0}
    direction="row"
    justify="center"
    alignItems="center"
    justifyContent="center"
    style={{margin: '0px', padding: '30px'}}
    >
      <Grid item>
      <Typography variant="h5" color="initial" align='center' >Courses</Typography>
      </Grid>
<Grid item>
      <ExpandMore
          expand={checked}
          onClick={handleChange}
          aria-expanded={checked}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </Grid>
    </Grid>

    <Grid
    container
    spacing={6}
    direction="row"
    justify="center"
    alignItems="center"
    justifyContent="center"

    >
 <CoursesCard 
      edu='Introduction to Artificial Intelligence (AI)'
      inst='IBM Skills Network'
      time='Jan 2022'
      checked={checked}
      collapsed={31}
      style={{backgroundColor: '#269AD4', cursor: 'pointer'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/8PCN8QGL8276', '_blank')}
      />
<CoursesCard 
      edu='Getting Started with AI using IBM Watson'
      inst='IBM Skills Network'
      time='Dec 2021'
      checked={checked}
      collapsed={31}
      style={{backgroundColor: '#37EBD6', cursor: 'pointer'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/H2UCPQKDXQY4', '_blank')}
      />
      <CoursesCard 
      edu='Building AI Powered Chatbots Without Programming'
      inst='IBM Skills Network'
      time='Jan 2022'
      checked={checked}
      collapsed={31}
      style={{backgroundColor: '#26D5FC', cursor: 'pointer'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/Z5RJS328N6SP', '_blank')}
      />
<CoursesCard 
      edu='Python for Data Science, AI & Development'
      inst='IBM Skills Network'
      time='Jan 2022'
      checked={checked}
      collapsed={31}
      style={{backgroundColor: '#5DD4B0', cursor: 'pointer'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/Z6GTRZ9C2KTK', '_blank')}
      />
      <CoursesCard 
      edu='Python Project for AI & Application Development'
      inst='IBM Skills Network'
      time='Jan 2022'
      checked={checked}
      collapsed={31}
      style={{backgroundColor: '#00FAD4', cursor: 'pointer'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/FUZTXT75FQJE', '_blank')}
      />
      <CoursesCard 
      edu='Building AI Applications with Watson APIs'
      inst='IBM Skills Network'
      time='Feb 2022'
      checked={checked}
      collapsed={31}
      style={{backgroundColor: '#09C66D', cursor: 'pointer'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/FUZTXT75FQJE', '_blank')}
      />
      <CoursesCard 
      edu='Python and Statistics for Financial Analysis'
      inst='The Hong Kong University of Science and Technology'
      time='Aug 2021'
      checked={checked}
      collapsed={31}
      style={{backgroundColor: '#26D5FC', cursor: 'pointer'}}
      ystyle={{color: '#ffffff', fontWeight:'bold'}}
      onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/W7YAYASD84V7', '_blank')}
      />
      
      <CoursesCard 
            edu='Usable Security'
            inst='University of Maryland, College Park'
            time='Jan 2019'
            checked={checked}
            collapsed={31}
            style={{backgroundColor: '#6ABBD4', cursor: 'pointer'}}
            ystyle={{color: '#ffffff', fontWeight:'bold'}}
            onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/7NDBDXZYH8MG', '_blank')}
            />

        <CoursesCard 
            edu='Introduction to Deep Learning & Neural Networks with Keras'
            inst='IBM Skills Network'
            time='Apr 2020'
            checked={checked}
            collapsed={31}
            style={{backgroundColor: '#26FCAE', cursor: 'pointer'}}
            ystyle={{color: '#000000', fontWeight:'bold'}}
            onclick={()=> window.open('https://www.coursera.org/account/accomplishments/certificate/L64E4YGGXPGH', '_blank')}
            />


    </Grid> 
        </Container>

  );
}
export {Education}
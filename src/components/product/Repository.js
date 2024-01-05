import React,{ useContext } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import { ThemeContext } from '../../context'
import "./product.css";


const REPOSITORY_QUERY = gql`
{
  repositoryOwner(login: "Fer4code") {
    repositories(first:6, privacy:PUBLIC, isFork:false,  orderBy:{field: UPDATED_AT, direction: DESC}) {
      nodes {
        id
        url
        name
        primaryLanguage {
          name
          color
        }
        updatedAt
      }
    }
  }
}
`;
const skeleton = (
  <>
  <Grid item md={4} s={11} align="center">
    <Skeleton animation="wave" variant="rectangular" width={400} height={80} />
    <Skeleton width={400} />
    <Skeleton width={400} />
  </Grid>
  </>
)


function Repository() {
  const { data, loading, error } = useQuery(REPOSITORY_QUERY);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(data)
  if (error) return (
    <>
    <Grid container spacing={4} style={{minWidth: "100vh", padding: "10%"}} justify="space-around" alignItems="center">
      <Grid item md={11}>
        <Typography variant="h4" color="initial" align="center">
        You can Go to my GitHub Account
        </Typography>
      </Grid>
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
    </Grid>
    </>
  )
  if (loading || !data) return (
    <>
    <Grid container spacing={4} className={darkMode ? 'r-bgd' : 'r-bg'} style={{paddingLeft: '10%', paddingRight: '10%', paddingBottom: '10%', paddingTop: '5%'}} justifyContent="center" justify="space-around" alignItems="center" alignContent="center">
      <Grid item md={11}>
      <Typography variant="h4" className={darkMode ? 't-bgd' : 't-bgl'} align="center">
        You can Go to my GitHub Account or find my latest repos here
        </Typography>
      </Grid>
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
    </Grid>
    </>
    )

 // return <pre>{JSON.stringify(data, null, 2)}</pre>;
 // <li key={nodes.id}>{nodes.name}</li>
 //         <li key={nodes.id}>{nodes.updatedAt}</li>
 //         <li key={nodes.id}>{nodes.url}</li>
 //         <li key={nodes.primaryLanguage.id}></li>

  return (
    <>
    <Grid container spacing={4} className={darkMode ? 'r-bgd' : 'r-bg'} style={{paddingLeft: '10%', paddingRight: '10%', paddingBottom: '7px', paddingTop: '7px'}} justifyContent="center" justify="space-around" alignItems="center" alignContent="center">
      <Grid item md={11} >
      <Typography variant="h4" className={darkMode ? 't-bgd' : 't-bgl'} align="center">
        GitHub Account or my repos right below?
        </Typography>
      </Grid>
      
        {data.repositoryOwner.repositories.nodes.map(nodes => (
          <>
          <Grid item key={nodes.id} md={4} s={11} className="c-item">
          <Card raised="true"  >
                <CardActionArea href={nodes.url} >
                  <CardContent className={darkMode ? 'c-bgd' : 'c-bgl'}>
                    
                    <Typography variant="h6" className={darkMode ? 't-bgd' : 't-bgl'} component="div" align="left" sx={{ mb: 1.5 }}>
                      {nodes.name}
                    </Typography>
                    <Grid container spacing={9} direction="row" justifyContent="space-between" alignItems="center">
                      <Grid item s={8}>
                          <Typography key={nodes.id} className={darkMode ? 'st-bgd' : 't-bd'} align="left">
                          Language:
                        </Typography>
                      </Grid>
                      <Grid item s={4}>
                          <Typography color={nodes.primaryLanguage.color} align="right">
                          <strong>{nodes.primaryLanguage.name}</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} direction="row" justifyContent="space-between" alignItems="center">
                      <Grid item s={6}>
                          <Typography variant="body2" key={nodes.id} className={darkMode ? 'stl-bdd' : 'st-bd'} >
                          Updated at:
                        </Typography>
                      </Grid>
                      <Grid item s={6} >
                          <Typography key={nodes.id} variant="body2" className={darkMode ? 'stl-bdd' : 'st-bd'} >
                          {nodes.updatedAt}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
          </>
        ))}
            <Typography variant="h6" className={darkMode ? 'stl-bdd' : 'st-bd'} style={{marginTop: "3%"}} >Made with ❤ using GitGraphQL API</Typography>

    </Grid>
    </>
  );
}

export { Repository }
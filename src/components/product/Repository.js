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




const REPOSITORY_QUERY = gql`
{
  repositoryOwner(login: "F3RN4ND02") {
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
  <Grid item md={4} s={6} align="center">
    <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
    <Skeleton width={210} />
    <Skeleton width={210} />
  </Grid>
  </>
)


function Repository() {
  const { data, loading, error } = useQuery(REPOSITORY_QUERY);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(error)
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
    <Grid container spacing={4} style={{minWidth: "100vh", padding: "10%"}} justify="space-around" alignItems="center">
      <Grid item md={11}>
      <Typography variant="h4" className={darkMode ? 't-bgl' : 't-bgd'} align="center">
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
    <Grid container spacing={4} className={darkMode ? 'r-bg' : 'r-bgd'} style={{padding: "10%"}} justifyContent="center" justify="space-around" alignItems="center" alignContent="center">
      <Grid item md={11} >
      <Typography variant="h4" className={darkMode ? 't-bgl' : 't-bgd'} align="center">
        You can Go to my GitHub Account or find my latest repos here
        </Typography>
      </Grid>
      
        {data.repositoryOwner.repositories.nodes.map(nodes => (
          <>
          <Grid item key={nodes.id} md={4} s={11} style={{minWidth: "350px" }}>
          <Card raised="true"  >
                <CardActionArea href={nodes.url} >
                  <CardContent className={darkMode ? 'c-bgl' : 'c-bgd'}>
                    
                    <Typography variant="h6" className={darkMode ? 't-bgl' : 't-bgd'} component="div" align="left" sx={{ mb: 1.5 }}>
                      {nodes.name}
                    </Typography>
                    <Grid container spacing={9} direction="row" justifyContent="space-between" alignItems="center">
                      <Grid item s={8}>
                          <Typography key={nodes.id} className={darkMode ? 'st-bd' : 't-bgd'} align="left">
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
                          <Typography variant="body2" key={nodes.id} className={darkMode ? 'stl-bd' : 'st-bdd'} >
                          Updated at:
                        </Typography>
                      </Grid>
                      <Grid item s={6} >
                          <Typography key={nodes.id} variant="body2" className={darkMode ? 'stl-bd' : 'st-bdd'} >
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
    </Grid>
    </>
  );
}

export { Repository }
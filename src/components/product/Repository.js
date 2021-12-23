import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import { CardActionArea } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';



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

const title = (
  <Typography variant="h4" color="initial" align="center">
        You can Go to my GitHub Account or find my latest repos here
        </Typography>
)

function Repository() {
  const { data, loading, error } = useQuery(REPOSITORY_QUERY);
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
        {title}
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
    <Grid container spacing={4} style={{minWidth: "100vh", padding: "10%"}} justify="space-around" alignItems="center">
      <Grid item md={11}>
        {title}
      </Grid>
        {data.repositoryOwner.repositories.nodes.map(nodes => (
          <>
          <Grid item key={nodes.id} md={4} s={6} align="center">
              <Card raised="true" >
                <CardActionArea href={nodes.url}>
                  <CardContent>
                    <Typography key={nodes.id} color="text.secondary" gutterBottom>
                      {nodes.updatedAt}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {nodes.name}
                    </Typography>
                    
                    <Typography sx={{ mb: 1.5 }} color={nodes.primaryLanguage.color}>
                      {nodes.primaryLanguage.name}
                    </Typography>
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
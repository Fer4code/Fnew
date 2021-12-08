import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./product.css";
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



function Repository() {
  const { data, loading, error } = useQuery(REPOSITORY_QUERY);

  if (error) return (
    <div>
      <Grid container spacing={2}
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
    </Grid>
    error...
    </div>
  )
  if (loading || !data) return (
    <div>
      <Grid container spacing={2}
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
      <Grid item md={4} s={6}>
      <Skeleton animation="wave" variant="rectangular" width={210} height={80} />
      <Skeleton width="42%" />
      <Skeleton width="42%" />      
      </Grid>
    </Grid>
    loading...
    </div>
    
    )

 // return <pre>{JSON.stringify(data, null, 2)}</pre>;
 // <li key={nodes.id}>{nodes.name}</li>
 //         <li key={nodes.id}>{nodes.updatedAt}</li>
 //         <li key={nodes.id}>{nodes.url}</li>
 //         <li key={nodes.primaryLanguage.id}></li>

  return (
    <>
    
    <Grid container spacing={4} direction='row' alignItems="center" 
    justifyContent="space-around" style={{padding: "5%"}}>
      <Grid item md={11}>
        <Typography variant="h4" color="initial" align="center">
        You can Go to my GitHub Account or find my latest repos here
        </Typography>
      </Grid>
        {data.repositoryOwner.repositories.nodes.map(nodes => (
          <>
          <Grid item key={nodes.id} md={4} s={6} align="center" >
              <Card raised="true" style={{ width: '60%'}}>
                <CardActionArea href={nodes.url}>
                  <CardContent>
                    <Typography key={nodes.id} sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
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
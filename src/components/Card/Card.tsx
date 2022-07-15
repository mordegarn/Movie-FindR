import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

 interface cardProps  {
    title:string,
    poster:string
 }

const Cardd:React.FC<cardProps> = ({title,poster}) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="No poster"
          height="340"
          image={poster}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cardd;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteCredentials } from "../api/credentials.api";

export default function MediaCard({ name1, lastname1, degree1, id1 }) {
  const params = useParams();
  console.log(params.id);
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-center"
        >
          {name1} {lastname1}
          <hr className="w-32 mx-auto border-1 border-black" />
          {degree1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          sx={{ backgroundColor: "#4CAF50", color: "white " }}
          onClick={() => {
            navigate(`/credentials/${id1}`);
          }}
          size="small"
        >
          Edit
        </Button>
        <Button
          sx={{ bgcolor: "#f44336", color: "white" }}
          size="small"
          onClick={() => {
            const confirm = window.confirm("Are you sure?");
            if (confirm) {
              deleteCredentials(id1);
              window.location.reload();
              toast.success("Credential deleted", {
                position: "bottom-right",
                style: {
                  background: "#101020",
                  color: "white",
                },
              });
            }
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

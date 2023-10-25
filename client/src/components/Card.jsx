import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { deleteCredentials } from "../api/credentials.api";

export default function MediaCard({
  nameCredential,
  lastnameCredential,
  degreeCredential,
  idCredential,
  imageCredential,
  bloodCredential,
  codeCredential,
  mailCredential,
  phoneCredential,
}) {
  // Using useNavigate in a constant
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 450 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{
            height: 130,
            width: 200,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 2,
            borderRadius: 20,
          }}
          image={imageCredential}
          title={`${nameCredential} ${lastnameCredential} Credential`}
        />
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-center"
        >
          {nameCredential} {lastnameCredential}
          <hr className="w-32 mx-auto border-1 border-black" />
          {degreeCredential}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "50px", marginLeft: 30, fontSize: 10 }}
        >
          <p>
            <b>EMAIL:</b> {mailCredential}
          </p>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "10px", marginLeft: 30, fontSize: 10 }}
        >
          <p>
            <b>PHONE:</b> {phoneCredential}
          </p>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "10px", marginLeft: 30, fontSize: 10 }}
        >
          <p>
            <b>CODE:</b> {codeCredential}
          </p>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "10px", marginLeft: 30, fontSize: 10 }}
        >
          <p>
            <b>BLOOD:</b> {bloodCredential}
          </p>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          className="but"
          sx={{
            backgroundColor: "#22c55e",
            color: "white",
            ":hover": {
              backgroundColor: "#16a34a",
            },
          }}
          onClick={() => {
            navigate(`/credentials/${idCredential}`);
          }}
          size="small"
        >
          Edit
        </Button>
        <Button
          sx={{
            bgcolor: "#ef4444",
            color: "white",
            ":hover": {
              backgroundColor: "#dc2626",
            },
          }}
          size="small"
          onClick={() => {
            // Button for delete
            const confirm = window.confirm("Are you sure?");
            if (confirm) {
              deleteCredentials(idCredential);
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

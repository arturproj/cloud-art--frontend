import * as React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CardMedia from "@mui/material/CardMedia";

import { uploadImage } from "../../../share/api/cloud_art_api";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const toJSON = (file, dataURL) => ({
  name: file.name,
  size: file.size,
  type: file.type,
  dataURL,
});

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(event) {
    let image = event.target.files[0];

    const result = await toBase64(image).catch((e) => Error(e));

    if (result instanceof Error) {
      console.log("Error: ", result.message);
      return;
    } else {
      this.props.loadPreview(toJSON(image, result));
      this.setState({
        file: result,
      });
    }
  }

  submitUpload() {
    uploadImage(this.props.preview).then((res) => console.log(res));
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            height="194"
            image={this.state.file}
            alt="Paella dish"
          />
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={this.handleChange}
            />
            <Button color="primary" variant="contained" component="span">
              <AddIcon />
              ADD IMAGE
            </Button>
          </label>
          <Button
            color="secondary"
            variant="contained"
            component="span"
            sx={{ m: 2 }}
            onClick={this.submitUpload}
          >
            UPLOAD
          </Button>
          <Item>12-4</Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>12-8</Item>
        </Grid>
      </Grid>
    );
  }
}

export default Upload;

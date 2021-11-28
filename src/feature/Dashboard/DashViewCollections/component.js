import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import PropTypes from "prop-types";
import { createSelector } from "reselect";

const selectAction = (screen) => screen.active;
const selectScreenMobile = (screen) => screen.isMobile;
const selectScreenLarge = (screen) => screen.isLarge;

const handleWindowM = createSelector(
  selectAction,
  selectScreenMobile,
  (open, isMobile) => !(open === isMobile)
);

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export function TypographyTheme() {
  return <Div>{"Sorry. We couldn't find any images "}</Div>;
}

export function ViewCollectionsComponent(props) {
  console.log("View collections component", props);
  const { collection, active } = props;
  const screen = {
    collection,
    active,
    isMobile: useMediaQuery("(min-width:500px)"),
    isLarge: useMediaQuery("(min-width:900px)"),
  };

  return (
    <Paper sx={{ p: 2 }}>
      {collection.length ? (
        <ImageList
          sx={{ m: 0 }}
          cols={handleWindowM(screen) ? 4 : 3}
          rowHeight={"auto"}
        >
          {collection.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <TypographyTheme />
      )}
    </Paper>
  );
}

ViewCollectionsComponent.propTypes = {
  collection: PropTypes.array.isRequired,
  preview: PropTypes.object,
};

ViewCollectionsComponent.defaultProps = {
  collection: [],
  preview: null,
};

export default ViewCollectionsComponent;

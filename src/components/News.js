import { Container, makeStyles, Box } from "@material-ui/core";
import React from "react";
import "./News.css";
import NewsCard from "./NewsCard";
const useStyles = makeStyles({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 10,
  },
});

const News = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <div className="content">
        <div className="download">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt=""
            className={classes.img}
          />
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt=""
            className={classes.img}
          />
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadmore <= newsResults && (
          <>
            <hr />
            <button
              onClick={() => setLoadmore(loadmore + 20)}
              className="loadmore"
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default News;

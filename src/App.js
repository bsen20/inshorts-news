// import logo from './logo.svg';
import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import News from "./components/News";
import "./App.css";
import axiox from "axios";
import apiKey from "./data/config";
import Footer from "./components/Footer";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);
  // newsApi();
  useEffect(() => {
    newsApi();
  }, [category, newsResults, loadmore]);

  const newsApi = async () => {
    try {
      const news = await axiox.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${loadmore}`
      );
      console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      console.log(newsArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Header setCategory={setCategory} setLoadmore={setLoadmore} />
      <News
        newsArray={newsArray}
        newsResults={newsResults}
        loadmore={loadmore}
        setLoadmore={setLoadmore}
      />
      <Footer />
    </Box>
  );
}

export default App;

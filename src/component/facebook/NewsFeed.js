import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import HeadLine from "./components/Headline";
import { newsPromise } from "../../api/fetchNewsFeed";
import { from } from "rxjs";

import "./newsfeed.scss";

const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = React.useState([]);
  React.useEffect(() => {
    const news$ = from(newsPromise).subscribe((news) => {
      setNewsFeed(news);
    });
    return () => news$ && news$.unsubscribe();
  }, []);
  return (
    <main>
      <Header></Header>
      <div className="news-feed">
        {newsFeed.length ? (
          newsFeed.map((newsItem) => (
            <ImageCard key={newsItem.id}>
              <HeadLine data={newsItem}></HeadLine>
            </ImageCard>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer></Footer>
    </main>
  );
};

export default NewsFeed;

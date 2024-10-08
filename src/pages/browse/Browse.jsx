import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import classes from "./browse.module.css";
import Banner from "../../banner/banner.js";
import MovieList from "../../body/movieList";
import MovieDetail from "../../body/movieDetail";

const api = [
  {
    link: "https://api.themoviedb.org/3/discover/tv?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_network=123",
    typeFilm: "Original",
  },
  {
    link: "https://api.themoviedb.org/3/trending/all/week?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&language=en-US",
    typeFilm: "Xu Hướng",
  },
  {
    link: "https://api.themoviedb.org/3/movie/top_rated?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&language=en-US",
    typeFilm: "Xếp hạng cao",
  },
  {
    link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=28",
    typeFilm: "Hành động",
  },
  {
    link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=35",
    typeFilm: "Hài",
  },
  {
    link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=27",
    typeFilm: "Kinh dị",
  },
  {
    link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=10749",
    typeFilm: "Lãng mạn",
  },
  {
    link: "https://api.themoviedb.org/3/discover/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_genres=99",
    typeFilm: "Tài liệu",
  },
];

const Browse = () => {
  const [parentID, setParentID] = useState("");
  // const [isDifferent, setIsDifferent] = useState(false);
  const [showData, setShowData] = useState({ id: 0, content: "", show: false });

  const getDetail = (e) => {
    console.log("lay : ", e);
    console.log(+showData.id);
    console.log(+e.id);
    if (+showData.id !== +e.id) {
      setShowData({
        id: e.id,
        content: e,
        show: true,
      });
    } else {
      setShowData({ id: 0, content: "", show: false });
    }

    // console.log("hien : ", showData);
    // khi setShowData 1 giá trị mới thì nó không cập nhật liền mà lên lịch để cập nhật sau khi chạy xong hàm getDetail, nên ta sẽ thấy console.log của nó không hiện ngay giá trị vừa mới cập nhật ở trên, nhưng nó không ảnh hưởng đến logic của chương trình nên ko sao
  };
  const getParent = (e) => {
    setParentID(e);
    // console.log(e);
  };

  const list = api.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <MovieList
          getLink={item.link}
          type={item.typeFilm}
          click={getDetail}
          clickParent={getParent}
        />
        {parentID === item.typeFilm && showData.show && (
          <MovieDetail getInf={showData.content} />
        )}
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.umbrella}>
        <Navbar />
        <Banner />
        {list}
      </div>
    </React.Fragment>
  );
};

export default Browse;

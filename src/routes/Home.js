import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    // async => await 을 사용하려면 필요
    // 이 함수가 비동기라는 것을 알려줌
    // axios 가 끝날 때까지 기다렸다가 계속 진행
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // setTimeout => delay function
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000); 6초 뒤 isLoading 의 상태가 false 로 변경
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              ></Movie>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

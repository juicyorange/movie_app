import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from "../components/Movie";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color : #eff3f7;
    height : 100%;
  }
`;

const Container = styled.section`
  height : 100%;
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;  
`;

const Movies = styled.div`
  display : flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding : 50px;
  padding-top : 70px;
  width: 80%;
`;

 
function Home() {
  const [isLoading, setisLoading] = useState(true);
  const [movies, setMoives] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const getMovies = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        setMoives(movies.data.data.movies);
        setisLoading(false);
      };
      getMovies();
  },[]);

  /*
  API를 요청해 데이터를 가져오는데 걸리는 시간이 있기 때문에 비동기 함수로 만든다. 
  비동기 함수를 만들기위해서 함수를 async로 선언하고 함수안의 동작에 await를 부여했다.  
  yts 사이트에서 요청하는 api로 주소가 매번 변경되므로 오류가 발생하면 주소를 찾아서 다시 입력해주자.
  axios 동작이 끝나기를 기다려야하기 때문에 앞에 await를 붙여준다. 
  */

 
  return (
    <>
    <GlobalStyle />
    <Container>
      {isLoading ? (
        <Loader>
          <span className = "loader_text">Loading...</span>
        </Loader>
      ) : (
        <Movies>
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          )
        )}
        </Movies>
      )}
      </Container>
      </>
  );
}
 
export default Home;


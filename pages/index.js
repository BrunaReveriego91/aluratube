import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //backgroundColor: "red"
  };

  //   console.log(config.playlists);

  return (
    <>
      <CSSReset />

      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}></Timeline>
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
.banner {


  img {
  max-height: 100%;
  width: 100%;
  height: 80%;
  border-radius: 0;
  z-index: -1;
  bottom: 374px;
  position: absolute;
  } 

}

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
 
  }


  .user-info {
    margin-top: 50px;
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  img {
    width: 100%;
    height: 200px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="banner">
        <img
          src={`https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80`}
        ></img>
      </div>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}></img>
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  //   console.log("Dentro do componente", props);
  const playlistNames = Object.keys(props.playlists);
  //Statement
  //Retorno por expressao
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb}></img>
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

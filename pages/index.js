import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  //   console.log(config.playlists);

  return (
    <>
      <CSSReset />

      <div style={estilosDaHomePage}>
        {/* {Prop Drilling} */}
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline
          searchValue={valorDoFiltro}
          playlists={config.playlists}
        ></Timeline>
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
      bottom: 400px;
      position: absolute;
    }
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
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
  background-color: blue;
  height: 230px;
  background-image: url(${({ bg }) => bg});
  // background-image: url(${config.bg});
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
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

function Timeline({ searchValue, ...props }) {
  //   console.log("Dentro do componente", props);
  const playlistNames = Object.keys(props.playlists);

  //Statement
  //Retorno por expressao
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        // console.log(playlistName);
        // console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
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

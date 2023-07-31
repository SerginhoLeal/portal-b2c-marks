import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  /* @media screen and (min-width: 900px) {
    article {
      padding: 1rem 3rem;
    }
  } */
`;

export const Main = styled.div`
  /* display: flex; */

  /* justify-content: center; */
  align-items: center;

  /* background-color: #000; */
  min-height: 463px;

  video {
    width: 500px;
    border: .5px solid #dedede;
    border-radius: 2px;
    /* margin: 5px; */
  };

  img {
    width: 500px;
    border: .5px solid #dedede;
    border-radius: 2px;
    /* margin: 5px; */
  };
`;

export const Other = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;

  height: 80vh;

  img{
    width: 100px;
    border: .5px solid #dedede;
    border-radius: 2px;
    margin: 0 5px 5px 0;
  }
`;
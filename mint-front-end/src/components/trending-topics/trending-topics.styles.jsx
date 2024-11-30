import styled from "styled-components";

export const Body = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const MessageContainer = styled.div`
  width: 100%;
`;

export const MessageCollection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: .5s ease;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .message-details {
    font-size: 1rem;
    color: #555;
  }

  &:hover {
    background: hsl(227, 28%, 90%);
  }
`;

export const Trending = styled.div`
  position: absolute;
  width: 20%;
  height: 60vh;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-left: 70rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 15px;
    color: #333;
  }

  .trending-list {
    list-style: none;

    .trend-item {
      margin-bottom: 10px;
      margin-left: -2rem;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      column-gap: 5px;
      
      div {
        display: flex;
        flec-direction: row;
        column-gap: 3px;
      }

      .message-details{
        margin: auto 0;
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }

  .top-people .message {
    padding: 10px;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }
`;

export const TrendingTitle = styled.h2`
  color: hsl(228, 57%, 28%) !important; 
  font-size: 1.6rem;
`
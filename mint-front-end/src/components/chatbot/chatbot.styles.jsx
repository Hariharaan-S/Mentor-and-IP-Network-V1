import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 40%;
  height: 500px;
  border-radius: 15px;
  margin-left: 44rem;
  margin-top: -28rem;
  background: linear-gradient(
    to right,
    rgb(38, 51, 61),
    rgb(50, 55, 65),
    rgb(33, 33, 78)
  );
`;

export const Chat = styled.div`
  margin: auto;
  width: 100%;
`;

export const Card = styled.div`
  height: 500px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px 15px 0 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 70px;
  width: 70px;
`;

export const UserImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1.5px solid #f5f6fa;
`;

export const OnlineIcon = styled.span`
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #4cd137;
  border-radius: 50%;
  bottom: 0.2em;
  right: 0.4em;
  border: 1.5px solid white;
`;

export const UserInfo = styled.div`
  margin-left: 15px;
  color: white;

  span {
    font-size: 20px;
  }

  p {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const CardBody = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const CardFooter = styled.div`
  display: flex;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 15px 15px;
`;

export const InputGroup = styled.form`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  padding: 15px;
  border-radius: 15px 0 0 15px;
  outline: none;
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  padding: 15px;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 20px;
  }
`;
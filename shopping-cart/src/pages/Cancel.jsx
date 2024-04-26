import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const Heading = styled.h1`
  color: red;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #404f5e;
  font-size: 20px;
  margin: 0;
`;

const Italic = styled.i`
  color: red;
  font-size: 100px;
  line-height: 200px;
  margin-left: -15px;
`;

const Card = styled.div`
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 8px 24px;
  margin-top: 20px;
  border: none;
  border-radius: 50px;
  background: skyblue;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Cancel = () => {
  return (
    <Wrapper>
      <Card>
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <Italic>❌</Italic>
        </div>
        <Heading>Failed</Heading>
        <Text>Couldn't process the Payment;</Text>
        <Link to="/">
          <Button path="/">Back to Home</Button>
        </Link>
      </Card>
    </Wrapper>
  );
};

export default Cancel;

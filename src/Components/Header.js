import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const { backgroundImage } = props;

  return (
    <HeaderParallax 
      className="container-fluid" 
      style={{ backgroundImage: `linear-gradient(0deg, rgba(66,84,101,0.4), rgba(66,84,101,0.4)), url(${backgroundImage})`, }}>
      <div className="row p-4">
        <div className="col-md-12">
          <HeaderDescription className="text-center mid-container">{props.children}</HeaderDescription>
        </div>
      </div>
    </HeaderParallax>
  );
};

const HeaderParallax = styled.header`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderDescription = styled.div`
  margin-top: 175px;
  color: #fff;
  padding: 5px;
  border: #000000;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
`;

export default Header;


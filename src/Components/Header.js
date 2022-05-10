import React from "react";
import styled from "styled-components";

const Header = (props) => {
	const { backgroundImage } = props;

	return (
		<header>
			<HeaderParallax>
				<HeaderParallaxImage src={backgroundImage} alt="" />

			</HeaderParallax>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="description text-center mid-container">{props.children}</div>
					</div>
				</div>
			</div>
		</header>

	);
};


const HeaderParallax = styled.div`
  max-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const HeaderParallaxImage = styled.img`
  width: 100%;
  height: auto;
`;

export default Header;

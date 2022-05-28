import React from "react";
import styled from "styled-components";
import { LogoutGoogle } from '../Components';

const ProfileCard = (props) => {

  const { onLogoutSuccess } = props;
  const { displayName, photoUrl } = props.profile;

  return (
    <div>
      <span className="navbar-text mx-1 d-none d-md-inline-block">{displayName}</span>
      <ProfileImage src={photoUrl} />
      <LogoutGoogle onLogoutSuccess={onLogoutSuccess} />
    </div>
  );
}


// <span className="navbar-text mx-2 d-none d-md-inline-block">{givenName}</span>
// <ProfileImage src={imageUrl} />


const ProfileImage = styled.img`
	background-size: 32px 32px;
	border: 0;
	-moz-border-radius: 50%;
	border-radius: 50%;
	display: inline-block;
	margin: 0px;
	margin-right: .25rem;
	margin-left: .50rem;
	position: relative;
	height: 32px;
	width: 32px;
	z-index: 0;

	:hover {
		cursor: pointer;
	}
`;

export default ProfileCard;


import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://i.postimg.cc/mZY4YjLW/avatar.png"
            alt="Viktoriia Leseiko"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>Viktoriia Leseiko</h1>
        <h2>@viktoriia_leseiko</h2>

        <p>
          Developer at{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://www.linkedin.com/in/viktoriia-leseiko-211041207/" target="_blank">
            @OnSilkRoad
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Chicago, Il
          </li>
          <li>
            <CakeIcon />
            Born on January 22, 1995
          </li>
        </ul>

        <Followage>
          <span>
            <strong>63 </strong>
            Following
          </span>
          <span>
            <strong>567 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;

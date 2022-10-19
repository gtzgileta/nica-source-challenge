import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Profile from './Profile';
import { loadProfile } from '../../store/user';

const ProfileContainer = () => {
    const [profile, setProfile] = useState(null);
    const dispatch = useDispatch();
    const { id } = useParams();

    dispatch(loadProfile(id, (result) => {
      setProfile(result)
    }));

    const backgroundImage = `url(https://picsum.photos/800)`;

    return <Profile profile={profile} backgroundImage={backgroundImage} />;
}

export default ProfileContainer;
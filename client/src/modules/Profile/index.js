import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import { loadProfile } from '../../store/user';

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const profile = useSelector((state) => state.User.profile);

    useEffect(() => {
      dispatch(loadProfile(id));
    }, []);

    const backgroundImage = `url(https://picsum.photos/800)`;

    return <Profile profile={profile} backgroundImage={backgroundImage} />;
}

export default ProfileContainer;
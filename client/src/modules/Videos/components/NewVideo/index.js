import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import NewVideo from './NewVideo';
import { addVideo } from '../../../../store/video';
import { validateNewVideo } from '../../../../utils/validate-util';

const NewVideoContainer = () => {
    const [title, setTitle] = useState('');
    const [video, setVideo] = useState('');
    const [image, setImage] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.Auth.user);

    const addVideoAction = () => {
        const formValues = { user_id: user.id, title, video_url: video, img_src: image, role };
        const validateSignUpResult = validateNewVideo(formValues)
        if (validateSignUpResult === 'valid') {
            dispatch(addVideo(formValues, () => {
                history.push("/videos");
            }));
        } else {
            setError(validateSignUpResult);
        }
    };

    return (
        <NewVideo
            handleSubmit={addVideoAction}
            formObj={{title, role, video, image}}
            setTitle={setTitle}
            setRole={setRole}
            setVideo={setVideo}
            setImage={setImage}
            error={error}
        />
    );
}

export default NewVideoContainer;
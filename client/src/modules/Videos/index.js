import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Videos from './Videos';
import { loadVideos } from '../../store/video';

const VideoContainer = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.Video.videos);
    useEffect(() => {
        dispatch(loadVideos());
    }, []);

    return <Videos videos={videos} />;
}

export default VideoContainer;
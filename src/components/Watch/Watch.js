import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getVideo } from "../../api/video";
import {
  PlaylistAdd,
  ShareOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import ReactPlayer from "react-player";
import "./Watch.css";

const Watch = () => {
  const { videoId } = useParams();
  const endpoint = `videos?id=${videoId}&part=snippet&part=statistics`;

  const { isLoading, data, error } = useQuery(["video", endpoint], getVideo);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error</div>;
  }

  const videoInfo = data?.data?.items?.[0];

  if (videoInfo?.snippet?.title) {
    document.title = videoInfo.snippet.title;
  }

  return (
    <>
      <Navbar />
      {videoInfo && (
        <div className="video_page_body">
          <div className="video_container">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing
              width="960px"
              height="540px"
            />
            <h2>{videoInfo.snippet.title}</h2>
            <div className="video_statistics">
              <p className="video_view_count">
                {videoInfo.statistics.viewCount} views
              </p>
              <div className="video_actions">
                <div className="video_icon">
                  <ThumbUpAltOutlined />
                  <p>{videoInfo.statistics.likeCount}</p>
                </div>
                <div className="video_icon">
                  <ThumbDownAltOutlined />
                  <p>Dislike</p>
                </div>
                <div className="video_icon">
                  <ShareOutlined />
                  <p>Share</p>
                </div>
                <div className="video_icon">
                  <PlaylistAdd />
                  <p>Save</p>
                </div>
              </div>
            </div>
          </div>
          <div className="video_related_videos">Related Videos</div>
        </div>
      )}
    </>
  );
};

export default Watch;

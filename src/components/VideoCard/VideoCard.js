import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "material-ui";
import "./VideoCard.css";

const VideoCard = ({ video, id }) => {
  return (
    <Link
      to={
        video?.snippet?.thumbnails?.high.url
          ? `/watch/v=${id}`
          : `/watch/v=cV2gBU6hKfY`
      }
      style={{ textDecoration: "none" }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="video_card">
        <img
          className="video_card_thumbnail"
          src={
            video?.snippet?.thumbnails?.high.url ||
            "https://i.pinimg.com/474x/30/88/a3/3088a3ebaf713600adacd00397ee410d.jpg"
          }
          alt=""
        />
        <div className="video_card_info">
          <Avatar
            className="video_card_avatar"
            src={video?.snippet?.thumbnails?.high.url}
            alt=""
          />
          <div className="video_card_text">
            <h4>{video?.snippet?.title}</h4>
            <p>{video?.snippet?.channelTitle}</p>
            <p>
              {video?.statistics?.viewCount} views • {video?.snippet?.createdAt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;

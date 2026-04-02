import React, { useEffect } from "react";
import "./PlayVideo.css";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useState } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [];

  const fetchVideoData = async () => {
    //Fetching video details
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  return (
    <div className="play-video">
      {/*<video src={video1} controls autoPlay muted></video>*/}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData
            ? `${value_converter(apiData.statistics.viewCount)} views • ${moment(
                apiData.snippet.publishedAt,
              ).fromNow()}`
            : "Loading..."}
        </p>
        <div>
          <span>
            <img src={like} alt="Like" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "0"}
          </span>
          <span>
            <img src={dislike} alt="Dislike" />
          </span>
          <span>
            <img src={share} alt="Share" />
            Share
          </span>
          <span>
            <img src={save} alt="Save" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="Publisher" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</p>
          <span>{} subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : "102"}{" "}
          comments
        </h4>
        <div className="comment">
          <img src={user_profile} alt="User" />
          <div>
            <h3>
              John Doe <span>2 days ago</span>
            </h3>
            <p>Great video! Very informative and easy to understand.</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>244</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="User" />
          <div>
            <h3>
              John Doe <span>2 days ago</span>
            </h3>
            <p>Great video! Very informative and easy to understand.</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>244</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="User" />
          <div>
            <h3>
              John Doe <span>2 days ago</span>
            </h3>
            <p>Great video! Very informative and easy to understand.</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>244</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="User" />
          <div>
            <h3>
              John Doe <span>2 days ago</span>
            </h3>
            <p>Great video! Very informative and easy to understand.</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>244</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;

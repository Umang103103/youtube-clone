import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube channel to learn Web Development</h3>
      <div className="play-video-info">
        <p>1M views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="Like" />
            125
          </span>
          <span>
            <img src={dislike} alt="Dislike" />2
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
          <p>GreatStack</p>
          <span>1M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easier</p>
        <p>
          Suscribe GreatStack to watch more videos on Web Development and
          Programming. We make videos on React, JavaScript, Node.js, CSS, HTML
          and more. We also make videos on competitive programming and DSA.
        </p>
        <hr />
        <h4>130 comments</h4>
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

import { user } from 'index.js';
import './task01.css';

export const Profile = () => {
  const Username = user.username;
  const Tag = user.tag;
  const Location = user.location;
  const Avatar = user.avatar;
  const Followers = user.stats.followers;
  const Views = user.stats.views;
  const Likes = user.stats.likes;

  return (
    <div>
      <div className="profile">
        <div className="description">
          <img src={Avatar} alt="User avatar" className="avatar" />
          <p className="name">{Username}</p>
          <p className="tag">@{Tag}</p>
          <p className="location">{Location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{Followers}</span>
          </li>
          <li>
            <span className="label">Views </span>
            <span className="quantity">{Views}</span>
          </li>
          <li>
            <span className="label">Likes </span>
            <span className="quantity">{Likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

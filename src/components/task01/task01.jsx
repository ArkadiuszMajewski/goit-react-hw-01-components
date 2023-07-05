import PropTypes from 'prop-types';
import './task01.css';

export const Profile = props => {
  console.log(props);

  const Username = props.user.username;
  const Tag = props.user.tag;
  const Location = props.user.location;
  const Avatar = props.user.avatar;
  const Followers = props.user.stats.followers;
  const Views = props.user.stats.views;
  const Likes = props.user.stats.likes;

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
// Profile.PropTypes={
//   props.user.username
// }

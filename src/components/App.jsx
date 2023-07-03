import { user } from 'index.js';

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
      <div>
        <div>
          <img src={Avatar} alt="User avatar" />
          <p>{Username}</p>
          <p>@{Tag}</p>
          <p>{Location}</p>
        </div>

        <ul>
          <li>
            <span>Followers </span>
            <span>{Followers}</span>
          </li>
          <li>
            <span>Views </span>
            <span>{Views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{Likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

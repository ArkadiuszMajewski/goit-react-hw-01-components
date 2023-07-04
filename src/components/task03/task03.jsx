import { Alert } from '../Alert/alert';
import './task03.css';
export const FriendList = props => {
  //   console.log(props);

  const FriendListItem = () => {
    return props.friends.map(a => {
      console.log(a);
      const avatar = a.avatar;
      const name = a.name;
      const variant = a.isOnline;
      const id = a.id;

      return (
        <li className="friend-list--item" key={id}>
          <span className="status">
            <Alert variant={variant} />
          </span>
          <img
            className="friend-list--avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className="friend-list--name">{name}</p>
        </li>
      );
    });
  };

  return <ul className="friend-list">{FriendListItem()}</ul>;
};

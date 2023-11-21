import { FriendListItem } from 'components';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, name, avatar, isOnline }) => (
      <FriendListItem
        key={id}
        name={name}
        avatar={avatar}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

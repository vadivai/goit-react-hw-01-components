import css from './FriendListItem.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => (
  <li className={css.item}>
    <span className={css.status}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

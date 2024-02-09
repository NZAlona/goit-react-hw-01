import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.containerList}>
        {friends.map(friend => (
          <li key={friend.id} className={css.items}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          </li>
        ))}
      </ul>
    </>
  );
};

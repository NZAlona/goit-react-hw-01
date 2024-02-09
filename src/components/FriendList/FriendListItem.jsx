import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.divContent}>
      <img src={avatar} alt="Avatar" width="55" className={css.imgIcons} />
      <p className={css.names}>{name}</p>
      <p className={clsx(css.onlineStatus, isOnline ? css.online : css.offline)}>
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

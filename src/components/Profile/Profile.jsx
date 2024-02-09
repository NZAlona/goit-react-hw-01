import css from "./Profile.module.css";

export const Profile = ({ name, location, tag, image, stats: { followers, views, likes } } ) => {
    return (
        <div className={css.container}>
<div className={css.imgWrapper}>
<img src={image} alt="User avatar" className={css.avatar} />
                <p className={css.userName}>{ name}</p>
                <p className={css.userTag}>@{ tag}</p>
                <p className={css.userLocation}>{ location}</p>
</div>
<ul className={css.list}>
<li className={css.items}>
<span className={css.followers}>Followers</span>
<span className={css.userFollowers}>{ followers}</span>
</li>
<li className={css.items}>
<span className={css.followers}>Views</span>
<span className={css.userFollowers}>{views}</span>
</li>
<li className={css.items}>
<span className={css.followers}>Likes</span>
<span className={css.userFollowers}>{ likes}</span>
</li>
</ul>
</div>

    )
}
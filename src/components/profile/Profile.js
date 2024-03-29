import React from 'react';

import defaultImg from './superman.png';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, avatar, tag, location, stats }) => {
	return (
		<div className={styles.profile}>
			<div className={styles.description}>
				<img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
				<p className={styles.name}>Name: {name}</p>
				<p className={styles.tag}>@{tag}</p>
				<p className={styles.location}>{location}</p>
			</div>

			<ul className={styles.stats}>
				<li className={styles.statsItem}>
					<span className={styles.label}>Followers</span>
					<span className={styles.quantity}>{stats.followers}</span>
				</li>
				<li className={styles.statsItem}>
					<span className={styles.label}>Views</span>
					<span className={styles.quantity}>{stats.views}</span>
				</li>
				<li className={styles.statsItem}>
					<span className={styles.label}>Likes</span>
					<span className={styles.quantity}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};

Profile.defaultProps = {
	avatar: defaultImg,
};

Profile.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}),
};
export default Profile;

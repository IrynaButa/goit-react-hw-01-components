import React from 'react';
import defaultImg from './logo.svg';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const Friends = ({ avatar, name, status }) => {
	return (
		<li className={styles.item}>
			<span className={status ? styles.online : styles.offline}>{status}</span>
			<img className={styles.avatar} src={avatar} alt={name} width="48" />
			<p className={styles.name}>{name}</p>
		</li>
	);
};
Friends.defaultProps = {
	avatar: defaultImg,
};

Friends.propTypes = {
	avatar: PropTypes.string,

	name: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
};
export default Friends;

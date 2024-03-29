import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
	const colors = ['#7CB9E8', '#B284BE', '#F19CBB', '#FFBF00', '#7FFFD4'];
	return (
		<section className={styles.statistics}>
			{title ? <h2 className={styles.title}>{title}</h2> : ''}
			<ul className={styles.statList}>
				{stats.map((stat, index) => (
					<li
						className={styles.item}
						key={stat.id}
						style={{ backgroundColor: colors[index] }}
					>
						<span className={styles.label}>{stat.label}</span>
						<span className={styles.percentage}>{stat.percentage}%</span>
					</li>
				))}
			</ul>
		</section>
	);
};
Statistics.defaultProps = {
	title: '',
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		}),
	),
};
export default Statistics;

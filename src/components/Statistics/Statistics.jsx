import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({good, neutral, bad, total, percent}) => {
    return (
        <ul>
            <li className={css.statisticItem}>
                <p>Good: {good}</p>
            </li>
            <li className={css.statisticItem}>
                <p>Neutral: {neutral}</p>
            </li>
            <li className={css.statisticItem}>
                <p>Bad: {bad}</p>
            </li>
            <li className={css.statisticItem}>
                <p>Total: {total}</p>
            </li>
            <li className={css.statisticItem}>
                <p>Positive Feedback: {percent}%</p>
            </li>
        </ul>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
import PropTypes from 'prop-types'


export default function Stats ({id, label, percentage}) {
    return (
        <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
        </li>
    ) 
}

Stats.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
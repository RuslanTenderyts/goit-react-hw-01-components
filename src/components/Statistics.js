import PropTypes from 'prop-types'
import Stats from './Stats'


export default function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">

                {stats.map(item => (
                    <Stats 
                        key = {item.id}
                        label = {item.label}
                        percentage ={item.percentage}
                    />
                ))}

            </ul>
        </section>
        
    );
}

Statistics.propTypes = {
    title: PropTypes.string,

};
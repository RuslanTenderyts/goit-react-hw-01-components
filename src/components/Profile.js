import PropTypes from "prop-types";
import ProfileStats from './ProfileStats';

export default function Profile ({ username, tag, location, avatar, stats }) {
    return (
        <div class="profile">
            <div class="description">
                <img
                src={avatar}
                alt={username}
                class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ProfileStats
                followers={stats.followers}
                views={stats.views}
                likes={stats.likes}
            />
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

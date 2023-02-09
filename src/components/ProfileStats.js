import PropTypes from "prop-types";

export default function ProfileStats({ followers, views, likes }) {
   return(
        <ul class="stats">
            <li>
            <span class="label">Followers</span>
            <span class="quantity">{followers}</span>
            </li>
            <li>
            <span class="label">Views</span>
            <span class="quantity">{views}</span>
            </li>
            <li>
            <span class="label">Likes</span>
            <span class="quantity">{likes}</span>
            </li>
        </ul>
   )
};

ProfileStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
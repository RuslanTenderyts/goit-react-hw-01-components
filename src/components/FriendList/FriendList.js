import PropTypes from "prop-types";
import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    id={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        
        </ul>
      
    )
    
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            
        })
    )
}
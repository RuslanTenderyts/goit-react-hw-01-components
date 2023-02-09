import Profile from './Profile';
import user from 'path/user'
import data from 'path/data'
import Statistics from './Statistics';

export const App = () => {
  return (
    <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          React homework template
        </div>
        <h2>Task 1</h2>
        < Profile 
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
        />
        <h2>Task 2</h2>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        
    </div>
  );
};

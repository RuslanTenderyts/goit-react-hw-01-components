import Profile from './Profile/Profile';
import user from 'path/user'
import Statistics from './Statistics/Statistics';
import data from 'path/data'
import FriendList from './FriendList/FriendList';
import friends from 'path/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from 'path/transactions.json';


export const App = () => {
  return (
    <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            margin: 30
          }}
        >
          React homework template
        </div>
        <div class='container'>

          <div class='task'>
            <h2>Task 1</h2>
            < Profile 
                  username={user.username}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  stats={user.stats}
            />
          </div>
          
          <div>
            <h2>Task 2</h2>
            <Statistics title="Upload stats" stats={data} />
            <Statistics stats={data} />
          </div>

          <div>
            <h2>Task 3</h2>
            <FriendList friends={friends} />
          </div>

          <div>
            <h2>Task 4</h2>
            <TransactionHistory items={transactions} />
          </div>

        </div>
    </>
  );
};

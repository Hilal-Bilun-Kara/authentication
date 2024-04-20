import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const { authInfo } = useAuth();

  useEffect(() => {
    axios
      .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
        headers: { Authorization: authInfo.token },
      })
      .then(function (response) {
        console.log(response);
        setFriends(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
export const useFriends = () => useContext(FriendsList);

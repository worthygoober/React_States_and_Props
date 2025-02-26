import { useState } from 'react'
import MoviesList from './MovieList';
import UserProfile from './UserProfile';

const App = () => {

  return (
    <><MoviesList /><div>
      <h1>Welcome to the User App</h1>
      <UserProfile />
    </div></>
  );
};

export default App;
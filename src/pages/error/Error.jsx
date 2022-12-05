import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <main>
        <h1>Oups...</h1>
        <h2>Page Not Found!</h2>
        <NavLink to="/">Go to homepage</NavLink>
      </main>
    </>
  );
};

export default Error;

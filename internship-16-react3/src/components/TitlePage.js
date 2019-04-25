import React from 'react';
import {Link} from 'react-router-dom'

const TitlePage = () => {
  return (
    <>
      <Link to="/dogs">Dogs</Link>
      <Link to="/cats">Cats</Link>
    </>
  );
}

export default TitlePage;
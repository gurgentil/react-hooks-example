import React, { useState, useEffect } from 'react';

function App() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      const response = await fetch('https://api.github.com/users/gurgentil/repos');

      const data = await response.json();

      setRepositories(data);
    }

    fetchRepositories();
  }, []);

  return (
    <>
      <ul>
        { repositories.map(repository => <li key={ repository.id }>{ repository.name }</li>) }
      </ul>
    </>
  );
}

export default App;

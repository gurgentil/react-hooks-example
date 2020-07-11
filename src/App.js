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

  function handleFavorite(id) {
    const updatedRepositories = repositories.map(repository => {
      return repository.id === id
        ? { ...repository, favorite: ! repository.favorite }
        : repository;
    });

    setRepositories(updatedRepositories);
  }

  return (
    <>
      <ul>
        { repositories.map(repository => (
          <li key={ repository.id }>
            { repository.name }
            { repository.favorite && <span>(Favorito)</span> }
            <button onClick={ () => handleFavorite(repository.id) }>Favoritar</button>
          </li>
        )) }
      </ul>
    </>
  );
}

export default App;

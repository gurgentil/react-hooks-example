import React, { useState } from 'react';

function App() {
  const [ repositories, setRepositories ] = useState([
    { id: 1, name: 'repo-1' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' },
  ]);

  function addRepository() {
    const id = Math.random();

    setRepositories([
      ...repositories,
      { id, name: `repo-${ id }` },
    ]);
  }

  return (
    <>
      <ul>
        { repositories.map(repository => <li key={ repository.id }>{ repository.name }</li>) }
      </ul>
      <button onClick={ addRepository }>
        Adicionar Repositório
      </button>
    </>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [ repositories, setRepositories ] = useState([
    { id: 1, name: 'repo-1' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' },
  ]);

  return (
    <ul>
      { repositories.map(repository => <li key={ repository.id }>{ repository.name }</li>) }
    </ul>
  );
}

export default App;

import React from "react";
import type { NextPage } from "next";
import "../styles/App.css'";



const Home: NextPage = () => {
  return (
    <div className="App">
      <header className="Header">
        <h1>Cabeçalho</h1>
      </header>
      <main className="Main">
        <h2>Conteúdo da Página</h2>
        <div className="Options">
          <button>Opção 1</button>
          <button>Opção 2</button>
          <button>Opção 3</button>
          <button>Opção 4</button>
        </div>
      </main>
      <footer className="Footer">
        <p>Rodapé</p>
      </footer>
    </div>
  );

  
};

// styles.js

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'blue',
    color: 'white',
  },
  header: {
    backgroundColor: 'darkblue',
    padding: '10px',
  },
  main: {
    flex: 1,
    padding: '20px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  footer: {
    backgroundColor: 'darkblue',
    padding: '10px',
  },
};



export default Home;


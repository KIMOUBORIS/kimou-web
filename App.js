import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenue sur Kimou Web !</h1>
      <p style={styles.text}>Ton site fonctionne parfaitement 🎉</p>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default App;

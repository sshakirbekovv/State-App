import React from 'react';
import './App.scss';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import FilesPage from './pages/FilesPage/FilesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FilesPage />
      </main>
    </div>
  );
}

export default App;

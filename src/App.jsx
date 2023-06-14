import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';
import React from 'react';

const App = () => {
  return (
    <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  );
};
export default App;

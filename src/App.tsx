import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useFilmsContextValue from './customHooks/useFilmsContextValue';
import { FilmListContext } from './context/FilmListContext';
import Body from './layouts/Body';
import FilmGrid from './components/FilmGrid/FilmGrid';
import FilmDetail from './components/FilmDetail/FilmDetail';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const filmContextDefaultValue = useFilmsContextValue();
  return (
    <div className="App">
      <FilmListContext.Provider value={filmContextDefaultValue}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Body searchBox={SearchBox} filmGrid={FilmGrid} />}
            />
            <Route
              path="/films"
              element={<Body searchBox={SearchBox} filmGrid={FilmGrid} />}
            />
            <Route path="/films/:ID" element={<FilmDetail />} />
          </Routes>
        </Router>
      </FilmListContext.Provider>
    </div>
  );
}

export default App;

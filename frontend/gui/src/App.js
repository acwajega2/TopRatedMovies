import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from './containers/Layout'

import MovieList from './components/MovieList';
import Movie from './components/Movie'


class App extends Component {
  render() {
    return (

      <React.Fragment>
        <CustomLayout>
          <MovieList />

        </CustomLayout>
        

      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import {fetchData} from './api'

class App extends React.Component{ 
  async componentDidMount(){
    const data=fetchData();
    console.log(data);
  }
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}
export default App;

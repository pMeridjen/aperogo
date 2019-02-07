import React, { Component } from 'react';
import axios from 'axios';
import GlobalMap from './GlobalMap';
import TrajectWindow from './TrajectWindow';

class Home extends Component {
  state={
    markets: {}
  }
  componentDidMount() {
    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=commercesparis&lang=fr&rows=3&facet=arro&facet=situation&facet=libact&refine.libact=Supermarch%C3%A9+classiques`)
      .then(res => {
        const markets = res.data;
        console.log('datas :', markets);
        
        this.setState({ markets });
      })
  }
  render() {
    return (
      <div className="home">
        <GlobalMap />
        <TrajectWindow />
      </div>
    );
  }
}

export default Home;

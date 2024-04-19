import axios from 'axios';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import GamesDetails from './GamesDetails';

export class GamesList extends Component {
  state = {gameslist: []};

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/y0geshthakur/mobile/db')
      .then(response => {
        this.setState({gameslist: response.data});
      });
  }
  renderList = () => {
    return this.state.gameslist.map((games, index) => {
      return <GamesDetails key={index} games={games} />;
    });
  };

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default GamesList;
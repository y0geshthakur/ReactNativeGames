import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Item from './Item.js';
import ItemSection from './ItemSection.js';

const GamesDetails = (props) => {
  const {headContainer, headerText, imageStyle} = styles;
  const {games} = props;
  return (
    <Item>
      <ItemSection>
        <View style={headContainer}>
          <Text style={headerText.text}>Name: {props.games.brand}</Text>
          <Text style={headerText.text}>Company: {props.games.model}</Text>
          <Text style={headerText.text}>URL: {props.games.url}</Text>
        </View>
      </ItemSection>
    </Item>
  );
};

styles = {
  headContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  imageStyle: {
    height: 300,
    flex: 1,
  },
};

export default GamesDetails;
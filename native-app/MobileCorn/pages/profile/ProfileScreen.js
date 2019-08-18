import React, { Component } from 'react';
import { StyleSheet,Text, View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});



const { width: viewportWidth } = Dimensions.get('window');

export default class Profile extends Component {

  static navigationOptions = {
    title: 'Most Popular',
  };

  constructor(props) {
    super(props);
    this.state = { 
      entries:[
        {
          title:"name"
        },
        {
          title:"name2"
        },
        {
          title:"name3"
        }
      ]
    };
  }

  _renderItem ({item, index}) {
    return (
        <View 
        style={styles.container}
        >
          <Image 
          source={require('../../assets/carouselImages/iPhone.png')}
          />
            <Text>{ item.title }</Text>
        </View>
    );
}
  render() {
    return (
      <View 
      style={styles.container}
      >
        <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
            />
      </View>
    );
  }
}
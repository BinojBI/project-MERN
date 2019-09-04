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
    title: 'Most Popular'
  };

  constructor(props) {
    super(props);
    this.state = { 
      entries:[
        {
          title:"iphoneX",
          price:[{shopName:"idealz",price:33453},{shopName:"greenware",price:3553},{shopName:"omobie",price:36564}],
          ram:4,
          rom:128,
          network:"4G",
          simType:"Hybrid duel"
        },
        {
          title:"Samsung galaxy",
          price:[{shopName:"idealz",price:33453},{shopName:"greenware",price:3553},{shopName:"omobie",price:36564}],
          ram:4,
          rom:128,
          network:"4G",
          simType:"Hybrid duel"
        },
        {
          title:"Redmi note 7",
          price:[{shopName:"idealz",price:33453},{shopName:"greenware",price:3553},{shopName:"omobie",price:36564}],
          ram:4,
          rom:128,
          network:"4G",
          simType:"Hybrid duel"
        }
      ]
    };
  }

  _renderItem ({item, index}) {
    return (
        <View 
        style={styles.container}
        >
          <Text style={{fontSize:24, marginBottom:10}}>{ item.title }</Text>
          <Image 
          source={require('../../assets/carouselImages/iPhone.png')}
          />
          <Text>Price range </Text>
          <View>

          </View>
         
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
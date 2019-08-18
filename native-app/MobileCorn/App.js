import React from "react";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet,Text,View,Image, Button, TextInput,KeyboardAvoidingView } from 'react-native';
import ProfileScreen from './pages/profile/ProfileScreen.js';
import { TextField } from 'react-native-material-textfield';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B8FF'
  },
  containerInfo:{
    padding:30,
    alignSelf: 'stretch',
  }
  
});

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      userName: '',
      password:''
    };
  }

  loginUser() {
     const {navigate} = this.props.navigation;
    // if(this.state.userName.toLocaleLowerCase() =="binoj" && this.state.password=="1234"){
      navigate('Profile');
    // }else{
    //   alert("wrong user");
    // }
  
  }

  static navigationOptions = {
    header: null
}
  render() {
    
    return (

      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image
          style={{ width: 50, height: 50, marginTop: 10, marginBottom: 10 }}
          source={require('./assets/cell_phone.jpg')}
        />
        <Text style={{ color: 'white' }}>LOG IN</Text>
        <View style={styles.containerInfo}>
          <TextField
            label='Username'
            value={this.state.userName}
            onChangeText={(userName) => this.setState({ userName })}
            baseColor='white'
            tintColor='white'
            textColor='white'
          />
          <TextField
            label='Password'
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            baseColor='white'
            tintColor='white'
            textColor='white'
            containerStyle={{ marginTop: -20, marginBottom: 10 }}
            secureTextEntry={true}
          />
          <Button
            title="Login"
            onPress={this.loginUser.bind(this)}
          />
        </View>
      </KeyboardAvoidingView>

    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},  
});

export default createAppContainer(MainNavigator);

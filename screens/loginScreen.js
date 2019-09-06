
import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import User from '../User';
import firebase from 'firebase';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props)
    console.log(props)
  }
  state = {
    phone: '',
    email: '',
    name: ''
  }

  handleChange = key => val => {
    this.setState({
      [key]: val
    })
  }

  

  submitForm = async () => {
    if(this.state.phone.length < 10) {
      Alert.alert('Error', 'Wrong Phone Number')

    }
    else if (
      this.state.name.length < 3
    ) {
      Alert.alert('Error', 'Wrong name')
    }
    else if(this.state.email.length < 3) {
      Alert.alert('Error', 'Wrong Email')
    }
    else {
      Alert.alert('success', "You are now logged in!")
      await AsyncStorage.setItem('userPhone', this.state.phone)
      await AsyncStorage.setItem('userName', this.state.name)
      await AsyncStorage.setItem('email', this.state.email)
      User.phone = this.state.phone;
      firebase.database().ref(`users/${User.phone}`).set({
        phone:this.state.phone,
        userName:this.state.name,
        email:this.state.email
      })
      this.props.navigation.navigate('App');
      // this.props.navigation.dispatch(StackActions.reset({
      //         index: 0,
      //         actions: [
      //           NavigationActions.navigate({ routeName: 'Home' })
      //         ],
      //       }))
      //save user data
    }
  }
  render() {
    return (
      <View style={styles.scrollView}>
        <TextInput 
          placeholder="Enter phone number"
          style={styles.input}
          value={this.state.phone}
          keyboardType="number-pad"
          onChangeText={this.handleChange('phone')}
        />
        <TextInput 
          placeholder="Enter your name"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TextInput 
          placeholder="Enter your email"
          style={styles.input}
          value={this.state.email}
          onChangeText={this.handleChange('email')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text style={styles.btnText}> Enter </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop:300 // start in the middle of the page
  },
  input: {
    padding:10,
    width:"90%",
    borderWidth:1,
    borderColor:'#ccc',
    marginBottom: 10,
    marginTop:10,
    marginLeft:20,
    borderRadius:5
  },
  btnText: {
    color:"darkblue",
    fontSize: 20

  }
});



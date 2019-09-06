import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import User from '../User';
import firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {
  
  componentDidMount() {
    this._bootstrapAsync();
  }

  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyD3q5P5dJNJmxqBpvRb1n2LssUue3uM1vc",
      authDomain: "fir-example-25031.firebaseapp.com",
      databaseURL: "https://fir-example-25031.firebaseio.com",
      projectId: "fir-example-25031",
      storageBucket: "",
      messagingSenderId: "179531280491",
      appId: "1:179531280491:web:a3fe16c8527202f6ad812e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }



  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{marginTop:300}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
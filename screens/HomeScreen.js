import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import User from '../User';
import firebase from 'firebase'

export default class HomeScreen extends React.Component {

	static navigationOptions = {
		title:'Chats'
	}
	state = {
		users:[]
	}

	componentWillMount() {
		let dbRef = firebase.database().ref('users');
		dbRef
		.on('child_added', val => {
			let person = val.val();
			person.phone = val.key
			this.setState({
				users: [...this.state.users, person]
			})

		})
	}
	_logOut = async () => {
		await AsyncStorage.clear()
		this.props.navigation.navigate('Auth');
	}
	renderRow = ({item}) => {
		console.log(item)
		return (
			<TouchableOpacity 
				style={{padding:10, borderBottomColor:'#ccc', borderBottomWidth:1}}
				onPress={() => this.props.navigation.navigate('Chat', item)}>
				<Text style={{fontSize:20}}> {item.userName} </Text>
			</TouchableOpacity>
		)

	}
	render() {
		return (
			<SafeAreaView>
				<FlatList 
					data={this.state.users}
					renderItem={this.renderRow}
					keyExtractor={(item) => item.phone}
				/>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	homeScreen: {
		marginTop:300
	}
})

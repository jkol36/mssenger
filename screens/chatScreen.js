import React from 'react';
import {View, SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../constants/styles';



export default class ChatScreen extends React.Component {
	constructor(props) {
		super(props)
	}
	static navigationOptions = ({navigation}) => {
		return {
			title:navigation.getParam('userName', null)
		}
	}

	state = {
		textMessage: ''
	}

	handleChange = key => val => {
		this.setState({[key]:val})

	}

	render() {
		return (
				<SafeAreaView> 
					<TextInput 
						style={styles.input}
						value={this.state.value}
						onChangeText={this.handleChange}
						placeholder={'type something'}
						></TextInput>
						<TouchableOpacity> 
							<Text> Send </Text>
						</TouchableOpacity>
				</SafeAreaView>
			)
	}
}
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.homeScreen}> 
				<Text> Home screen </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	homeScreen: {
		marginTop:300
	}
})

import { useState } from 'react';
import {Button,TextInput, View, StyleSheet,Modal, Image} from 'react-native';
const GoalInput = (props) => {
    const [enteredText,setEnteredText] = useState('');
    const goalInputHandler = (enteredtext) =>{
        setEnteredText(enteredtext);
      }
    const addGoalHandler= () =>{
        props.addGoalHandler(enteredText);//send the text to app.js
        setEnteredText('');//make empty after update using 2 way binding
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput style={styles.textInput}
                    onChangeText={goalInputHandler}
                    placeholder="Your Course Goal!"
                    value={enteredText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' 
                        onPress={addGoalHandler} 
                        color='rgb(0, 106, 37)' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' 
                        onPress={props.onCancel}
                        color='rgb(123, 18, 0)' />
                    </View>
                </View>
            </View>
        </Modal>
      );
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        margin:20,
        //flex used to control the positions
        flexDirection: 'column',//default is column
        justifyContent: 'center',//main axis
        alignItems: 'center',
        paddingBottom: 42,
        padding:50,
        borderRadius:20,
        backgroundColor: '#bbd1f5',
       },
       textInput:{
        borderWidth:1,
        borderColor: 'grey',
        marginRight: 8,
        paddingHorizontal:16,
        backgroundColor:'rgb(254, 251, 253)',
        height:40,
        borderRadius:20,
        width: '90%'
       },
       button : {
        backgroundColor:'#6b0089',
        borderRadius: 10,
        padding:4
       },
       buttonContainer: {
        flexDirection: 'row',
        justifyContent : 'space-between',
        width: "70%",
        marginTop:20
       },
       image: {
        width:150,
        height: 150,
        margin:20,
       }
});
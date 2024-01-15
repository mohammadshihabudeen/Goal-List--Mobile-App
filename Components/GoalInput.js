import { useState } from 'react';
import {Button,TextInput, View, StyleSheet} from 'react-native';
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
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        onChangeText={goalInputHandler} 
        placeholder="Your Course Goal!"
        value={enteredText} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
      );
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        margin:20,
        //flex used to control the positions
        flexDirection: 'row',//default is column
        justifyContent: 'space-between',//main axis
        alignItems: 'center',
        paddingBottom: 42,
        padding:50,
        borderRadius:20,
        backgroundColor: '#bbd1f5',
        flex:1
       },
       textInput:{
        borderWidth:1,
        borderColor: 'grey',
        marginRight: 8,
        paddingHorizontal:16,
        backgroundColor:'rgb(254, 189, 229)',
        height:40,
        borderRadius:20,
        width: '70%'
       },
});
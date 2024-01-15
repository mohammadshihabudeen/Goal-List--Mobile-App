import { StyleSheet, Text, View, Button,TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';
export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const addGoalHandler= (enteredText) =>{
    //add param for get the value from child using prop
    setCourseGoals((courseGoals) => {
      return [...courseGoals
        ,{ text:enteredText, id: Math.random().toString()}];//fot key
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput 
      addGoalHandler = {addGoalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList 
        data={courseGoals} //array of data
        renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text}/>
          );
        }}
        keyExtractor={(item,index)=>{
          return item.id;//extracting the key
        }}>
        </FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 appContainer:{
  marginTop:40,
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flex:1
 },
 goalContainer:{
  margin:20,
  //flex used to control the positions
  borderRadius:20,
  backgroundColor: '#bbd1f5',
  flex:7
 },
 goalItem:{
  padding: 10,
  margin:8,
  borderRadius: 6,
  backgroundColor: 'rgb(82, 0, 115)',
  color: 'white',
 },
 goalText:{
  color:'white',
 }
});

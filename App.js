import { StyleSheet, Text, View, Button,TextInput,Pressable, FlatList } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';
export default function App() {
  const [modalIsVisible, setModalIsVisible]=useState(false);
  const [courseGoals,setCourseGoals] = useState([]);
  const startAddGoalHanddler = () =>{
    setModalIsVisible(true);
  }
  const closeAddGoalHanddler = () =>{
    setModalIsVisible(false);
  }
  const addGoalHandler= (enteredText) =>{
    //add param for get the value from child using prop
    if (enteredText !== '')
    {
     setCourseGoals((courseGoals) => {
      return [...courseGoals
        ,{ text:enteredText, id: Math.random().toString()}];//fot key
    });
    setModalIsVisible(false);//close after Adding
    }
  }
  const deleteGoalHandler= (id) =>{
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal)=>{
        return goal.id !== id;
      })
    });
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          onCancel={closeAddGoalHanddler}
        />
        <View style={styles.goalContainer}>
          <View style={styles.button}>
            <Pressable
            style={styles.buttonInside}
              android_ripple={{ color: '#c273ff' }}
              onPress={startAddGoalHanddler}>
              <Text style={{ color: 'white' }}>Add New Goal</Text>
            </Pressable>
          </View>
          <FlatList
            data={courseGoals} //array of data
            renderItem={itemData => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  ondeleteItem={deleteGoalHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;//extracting the key
            }}>
          </FlatList>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 appContainer:{
  marginTop:40,
  flexDirection: 'column',
  justifyContent: 'flex-end',
  //backgroundColor: 'rgb(82, 0, 145)',
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
 },
button : {
  margin:40,
  backgroundColor: 'rgb(82, 0, 115)',
  borderRadius: 12,

},
buttonInside: {
  padding:10,
  paddingLeft: "30%",
}
});

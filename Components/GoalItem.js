import { } from "react-native";
import { Text, View, StyleSheet, Pressable } from 'react-native';
const GoalItem = (props) => {
  const onDeleteItem = () => {
    props.ondeleteItem(props.id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable 
       onPress={onDeleteItem}
       style={({pressed})=> {
        return pressed && {
          opacity:0.8,
          backgroundColor: '#4b0142' 
        };
       }}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'rgb(82, 0, 115)',
    color: 'white',
  },
  pressedItem:{
    opacity:0.8,
    backgroundColor: '#4b0142' 
  },
  goalText: {
    padding: 10,
    color: 'white',
  }
});
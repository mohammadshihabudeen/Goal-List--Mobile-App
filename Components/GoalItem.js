import {  } from "react-native";
import {Text, View, StyleSheet} from 'react-native';
const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      );
}
export default GoalItem;

const styles = StyleSheet.create({
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
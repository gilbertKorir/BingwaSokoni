//import liraries
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


// create a component
const Home = ({navigation }) => {
    const toOffers = ()=>{
        navigation.navigate('Offers')
      }
    return (
        <SafeAreaView style ={styles.home}>
        <StatusBar style="auto" backgroundColor='#86efac' />
         <View style={styles.container}>
            <Text style={{fontSize:30}}>Bingwa sokoni, </Text>
            <Text style={{fontSize:15}}>check our offers below</Text>
  
          <View>
            <Image source={require('../assets/rtt.jpg')} style={{marginTop:10,height:360, width:250, alignSelf:'center'}}/>
          </View>
         </View>
  
         <View style={styles.centeredButtonContainer}>
          <TouchableOpacity onPress={toOffers} style={styles.centeredButton}>
            <Text style={{ color: 'white', alignSelf:'center', marginRight:10}}>Start</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      marginTop:50,
      padding:20
    },
    home:{
      flex: 1,
      backgroundColor: '#fff',
    },
    centeredButtonContainer: {
      flex: 1,
      alignItems: 'center',
      marginTop:30
    },
    centeredButton: {
      backgroundColor: '#07A93D',
      padding: 10,
      borderRadius: 10,
      width:200,
      flexDirection:'row',
      justifyContent:'center'
    },
  });

export default Home;

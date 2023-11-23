// import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';


const Offers = ({ navigation }) => {
  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center', }}>
       <Text style={{fontSize:25, fontWeight:'bold', bottom:10,}}>Offers</Text>
      </View>

      <View style={{flexDirection:'column',justifyContent:'space-between'}}>
      <TouchableOpacity style={{ marginTop: 10, padding: 10, 
        backgroundColor: '#86efac',borderRadius: 5,
         width:250}} onPress={() => handlePress('Data Offers')}>
        <Text style={{alignSelf:'center'}}>Data Bundles</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20, padding: 10,
         backgroundColor: '#93c5fd',borderRadius: 5, 
         width:250}}onPress={() => handlePress('Minutes Deals')}>
        <Text style={{alignSelf:'center'}}>Minutes</Text>
      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'column', justifyContent:'space-between'}}>
        <TouchableOpacity style={{ marginTop: 20, padding: 10,
           backgroundColor: '#fb7185',borderRadius: 5, 
           width:250}} onPress={() => handlePress('Others Deals')}>
          <Text style={{alignSelf:'center'}}>Others</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20, padding: 10, 
          backgroundColor: '#fbbf24',borderRadius: 5, 
          width:250}} onPress={() => handlePress('Blaze Bundles')}>
          <Text style={{alignSelf:'center'}}>Blaze</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems:'center',
     paddingTop:200
    // justifyContent:'center'

  },
});

export default Offers;

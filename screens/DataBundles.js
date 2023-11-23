//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';

// create a component
const DataBundles = () => {
  const optionsData = [
    { id:1,option: '50 mb', amount: 10, desc:`Ksh. ${10} for 24 Hrs` },
    { id:2,option: '100 mb', amount:20, desc: `Ksh. ${20} for 24 Hrs` },
    { id:3,option: '200 mb', amount:25, desc: `Ksh.${25} for 24 Hrs`},
    { id:4,option: '500 mb', amount:50, desc: `Ksh. ${50} for 24 Hrs`},
    { id:5,option: '1 gb',  amount:100, desc: `Ksh. ${100} for 24 Hrs` },
  ];
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [phone, setPhone] = useState('');
  const [showPaymentView, setShowPaymentView]= useState(false);

  const handleNext = () => {
    if (!userInput.trim()) {
      alert('Option cannot be empty');
      return;
    }

    const selectedIdNumber = parseInt(userInput, 10);
    const selectedOption = optionsData.find((option) => option.id === selectedIdNumber);

    if (selectedOption) {
      // alert(`Selected amount: Ksh. ${selectedOption.amount}`);
      setSelectedOption(selectedOption);
      setShowPaymentView(true); 
    } else {
      alert(`Option ${selectedIdNumber} does not exist`);
    }
   };

    const resetSelection = () => {
      setSelectedOption(selectedOption);
      setUserInput('');
    };

    const handleCancel = () => {
      resetSelection();
      setShowPaymentView(false);
    };
    const handlePay = (screen) => {
      if (selectedOption) {
        const amount = selectedOption.amount;
        alert(`Amount to pay: Ksh. ${amount} ${phone}`);
      }
    };

    return (
     <SafeAreaView style={styles.container}>
      {showPaymentView ? (
        <View style={{ paddingTop: 10}}>
         <Text style={{ fontSize: 17, paddingHorizontal: 5, }}>
          Amount: {selectedOption.amount}
        </Text>
        <Text style={{ fontSize: 17, paddingHorizontal: 5, paddingVertical:10 }}>Enter phone number to pay</Text>
        <TextInput
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: '#d4d4d8',
            paddingHorizontal: 20,
            justifyContent: 'center',
            borderRadius: 10,
          }}
          keyboardType="numeric"
          placeholder="0712345678"
          value={phone}
          onChangeText={(text) => setPhone(text)}/>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 20 }}>
        <TouchableOpacity onPress={handleCancel}
            style={{
              width: '35%',
              backgroundColor: '#ef4444',
              paddingHorizontal: 20,
              justifyContent: 'center',
              padding: 7,
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <Text style={{ alignSelf: 'center', color: 'white' }}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePay}
            style={{
              width: '35%',
              backgroundColor: '#65a30d',
              paddingHorizontal: 20,
              justifyContent: 'center',
              padding: 7,
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <Text style={{ alignSelf: 'center', color: 'white' }}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View>
        <Text style={{color:'#15803d', fontSize:20, fontWeight:'bold'}}>Data deals</Text>
        {optionsData.map((option) => (
          <Text key={option.id} style={styles.optionText}>{`${option.id}. ${option.option} @${option.desc}`}</Text>
        ))}
        <View style={{ top: 20 }}>
          <Text style={{ fontSize: 17, paddingHorizontal: 5 }}>Choose your option:</Text>
          <TextInput
            style={{
              width: '100%',
              top: 10,
              backgroundColor: '#d4d4d8',
              paddingHorizontal: 20,
              justifyContent: 'center',
              padding: 5,
              borderRadius: 10,
            }}
            keyboardType='numeric'
            placeholder='option'
            value={userInput}
            onChangeText={(text) => setUserInput(text)}/>

            <TouchableOpacity   onPress={handleNext}
              style={{width:'100%',top:30, backgroundColor:"#020617", 
              paddingHorizontal:20,justifyContent:'center',
              padding:10,borderRadius:10,alignSelf:'center'}}>
              <Text style={{alignSelf:'center', color:'white'}}>Next</Text>
            </TouchableOpacity>
        </View>
      </View>
    )}

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:40
    },
    optionText: {
      fontSize: 17,
      marginBottom: 8, 
    }
});

//make this component available to the app
export default DataBundles;

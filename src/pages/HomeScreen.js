import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ProductScreen from './ProductScreen';
import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_SURNAME,
  CHANGE_PHONE_NUMBER,
} from '../redux/actions/actionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {isDarkThemeAction} from '../redux/actions/userAction';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {name, surname, email, phoneNumber} = useSelector(state => state.user);

  const dispatch = useDispatch();

  return (
    <View style={{margin: 20, gap:25}}>
      <Text style={{fontSize:25, fontStyle:'italic', fontWeight:'bold', borderStyle:'solid', borderBottomWidth:3, borderColor:'gray',  textAlign:'center'}}>Please Fill The Informations</Text>
      <View>
        <Text style={styles.subjectTextStyle}>Name: {name}</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text =>
            dispatch({
              type: CHANGE_NAME,
              payload: text,
            })
          }
        />
      </View>
      <View>
        <Text style={styles.subjectTextStyle}>Surname: {surname}</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text =>
            dispatch({
              type: CHANGE_SURNAME,
              payload: text,
            })
          }
        />
      </View>
      <View>
        <Text style={styles.subjectTextStyle}>E-Mail: {email}</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text =>
            dispatch({
              type: CHANGE_EMAIL,
              payload: text,
            })
          }
        />
      </View>
      <View style={{marginBottom: 30}}>
        <Text style={styles.subjectTextStyle}>Phone Number: {phoneNumber}</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text =>
            dispatch({
              type: CHANGE_PHONE_NUMBER,
              payload: text,
            })
          }
        />
      </View>
      <Button
        title="Save And Continue"
        onPress={() => navigation.navigate('Product')}
        
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textInputStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  subjectTextStyle: {
    padding:10,
    fontSize:20,
    fontWeight:'900'
  },
  
});

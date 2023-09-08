import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux/'

const ProductScreen = () => {

  const name= useSelector(state=> state.user.name)
  const surname= useSelector(state=> state.user.surname)
  const email= useSelector(state=> state.user.email)
  const phoneNumber= useSelector(state=> state.user.phoneNumber)
  return (
    <View style={{flex:1, justifyContent:'center',gap: 20}}>
      <Text style={styles.textStyle}>{name} {surname}</Text>
      <Text style={styles.textStyle}>{email}</Text>
      <Text style={styles.textStyle}>{phoneNumber}</Text>
      
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  textStyle:{
    fontWeight: '900',
    fontSize:24,
    gap: 15 ,
    margin: 20,
    alignSelf: 'center',
    
  }
})
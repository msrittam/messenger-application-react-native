import React,{useState}from'react';import axios from'axios';
import{Text,StyleSheet,View,TextInput,FlatList,ScrollView,LogBox}from'react-native';
const ComponentsScreen=props=>{const[email,setemail]=useState('');const [emailfrom,setemailfrom]=useState('');
const[message,setmessage]=useState('');const[resp,setresp]=useState('');const[pass,setpass]=useState('');const[emailto,setemailto]=useState('');
const[pass2,setpass2]=useState('');const[err,seterr]=useState('');LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
return (<ScrollView showsVerticalScrollIndicator={false}><View style={styles.pacman}/><Text style={styles.input3}allowFontScaling={false}>anywhere</Text>
<TextInput style={styles.input2}value={email}allowFontScaling={false}onChangeText={setemail}placeholder='email address:'placeholderTextColor='white'/>
<TextInput style={styles.input}value={pass}allowFontScaling={false}onChangeText={setpass}placeholder='password:'placeholderTextColor='white'/>
<Text style={styles.input}allowFontScaling={false}onPress={()=>{axios.post('http://b24a2f25abf9.ngrok.io/signup',{from:email,pass:pass}).then(setresp).catch(seterr)}}>come in with your google account</Text>
<TextInput style={styles.input}allowFontScaling={false}value={emailfrom}onChangeText={setemailfrom}placeholder='email address:'placeholderTextColor='white'/>
<TextInput style={styles.input}allowFontScaling={false}value={pass2}onChangeText={setpass2}placeholder='password:'placeholderTextColor='white'/>
<TextInput style={styles.input}allowFontScaling={false}value={emailto}onChangeText={setemailto}placeholder='friend email address:'placeholderTextColor='white'/>
<TextInput style={styles.input}allowFontScaling={false}value={message}onChangeText={setmessage}placeholder='message:'placeholderTextColor='white'/>
<Text style={styles.input}allowFontScaling={false}onPress={()=>{axios.post('http://b24a2f25abf9.ngrok.io/send',{from:emailfrom,pass:pass2,to:emailto,message:message}).then(setresp).catch(seterr)}}>click here to message your friend</Text>
<FlatList data={resp.data}keyExtractor={(result)=>result._id}renderItem={({item})=>{return<Text style={styles.input}allowFontScaling={false}>from: {item.from} to: {item.to} message: {item.message}</Text>}}/></ScrollView>);};
const styles = StyleSheet.create({
input:{paddingHorizontal:12,borderRadius:12,backgroundColor:'red',fontWeight:'bold',marginBottom:12,marginHorizontal:12,fontSize:20,color:'white'},
input2:{marginVertical:200,paddingHorizontal:12,borderRadius:12,backgroundColor:'red',fontWeight:'bold',marginBottom:12,marginHorizontal:12,fontSize:20,color:'white'},
input3:{fontWeight:'bold',borderRadius:12,backgroundColor:'red',paddingHorizontal:12,marginTop:86,marginLeft:132,fontSize:20,position:'absolute',color:'white'},
pacman:{marginLeft:120,marginTop:40,position:'absolute',borderTopWidth:60,borderTopColor:'red',borderLeftColor:'red',borderLeftWidth:60,borderRightColor:'white',
borderRightWidth:60,borderBottomColor:'red',borderBottomWidth:60,borderTopLeftRadius:60,borderTopRightRadius:60,borderBottomRightRadius:60,borderBottomLeftRadius:60}});
export default ComponentsScreen;
//overflow: 'hidden',
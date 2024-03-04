import React from 'react';
import { StyleSheet,SafeAreaView, StatusBar } from "react-native";
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default function App() {
  return(
    <SafeAreaView style={styles.backgroundstyle}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  ); 
}

const styles=StyleSheet.create({
  backgroundstyle:{
    flex:1,
    backgroundColor:"#060C20",
  },
});


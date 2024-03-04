import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import albumData from './AlbumData.json';

const AlbumCard = () => {
  return (
    <ScrollView>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/zh/1/15/IU_-_Palette.jpg" }}
                />
                <View style={styles.headerContainerStyle}>
                <Text>{albumData[0].title}</Text>
                <Text>{albumData[0].artist}</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                style={styles.imageStyle}
                source={{
                    uri:
                     "https://assets.juksy.com/files/articles/117587/800x_100_w-6326fc00bcde6.jpg"
                }}
                />
                </View>
            </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/zh/1/15/IU_-_Palette.jpg" }}
                />
                <View style={styles.headerContainerStyle}>
                    <Text>Dear Name</Text>
                    <Text>IU</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                style={styles.imageStyle}
                source={{
                    uri:
                     "https://www.kpopn.com/upload/62614e7c9c77270d65bf.jpg"
                }}
                />
                </View>
            </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/zh/1/15/IU_-_Palette.jpg" }}
                />
                <View style={styles.headerContainerStyle}>
                    <Text>Jam Jam</Text>
                    <Text>IU</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                style={styles.imageStyle}
                source={{
                    uri:
                     "https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/9909135243004ca890ef14ec06f267a2~tplv-xv4ileqgde-resize-w:750.image"
                }}
                />
                </View>
            </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/zh/1/15/IU_-_Palette.jpg" }}
                />
                <View style={styles.headerContainerStyle}>
                    <Text>Full Stop</Text>
                    <Text>IU</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                style={styles.imageStyle}
                source={{
                    uri:
                     "https://i.ytimg.com/vi/ijprQs5X0hE/hqdefault.jpg"
                }}
                />
                </View>
            </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/zh/1/15/IU_-_Palette.jpg" }}
                />
                <View style={styles.headerContainerStyle}>
                    <Text>Black Out</Text>
                    <Text>IU</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                style={styles.imageStyle}
                source={{
                    uri:
                     "https://www.niusnews.com/upload/imgs/default/2020Jan_JENNNNNN/Celebrity/1.jpg"
                }}
                />
                </View>
            </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop:10
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50, // 正確的屬性是 width，而不是 weight
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft:5,
    marginTop:3,
  },
  imageStyle:{
    height:300,
    width:null,
  },
  cardSectionStyle:{
    padding:5,
    backgroundColor:"#ddd",
    borderColor:"#ddd",
    borderBottomWidth:1,
  },
});

export default AlbumCard;

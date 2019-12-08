import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  PermissionsAndroid
} from "react-native";
import MusicFiles from "react-native-get-music-files";
import { Svg, Path } from 'react-native-svg';
import ImgAlbum from "../assets/img/album_img.png";
import PlayIcon from "../assets/icon/play.png";

export default class HomeTab extends Component {
  state = {
    album: [
      {
        id: 1,
        title: "Suka Suka",
        singer: "BlackPink"
      },
      {
        id: 2,
        title: "Likey Likey",
        singer: "Twice"
      },
      {
        id: 3,
        title: "What What",
        singer: "Blackpink"
      }
    ],
    music: [ 
      {
        id: 1,
        title: "Suka Suka",
        longtime: "09:23"
      },
      {
        id: 2,
        title: "Likey Likey",
        longtime: "04:00"
      },
      {
        id: 3,
        title: "What What",
        longtime: "03:00"
      }
    ],
    songs: [],
    storagePermission: ""
  };

  async componentDidMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Listen Music App Storage Permission",
          message:
            "Listen Music App needs access to your storage " +
            "so you can listen music.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the storage");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }

    this._getSongs();
  }

  renderAlbum() {
    return this.state.album.map(alb => (
      <TouchableOpacity style={{ paddingTop: 60, paddingRight: 15 }}>
        <View style={styles.bg_album}>
          <View style={styles.album_content}>
            <Image source={ImgAlbum} style={styles.album_img} />
            <View style={styles.box_content_album}>
              <Text style={styles.album_title}>{alb.title}</Text>
              <Text style={styles.album_singer}>{alb.singer}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  }

  _getSongs = () => {
    MusicFiles.getAll({
      blured: true, // works only when 'cover' is set to true
      artist: true,
      duration: true, //default : true
      cover: false, //default : true,
      genre: true,
      title: true,
      cover: true,
      minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration,
      fields: ["title", "albumTitle", "genre", "lyrics", "artwork", "duration"] // for iOs Version
    })
      .then(tracks => {
        this.setState({
          songs: tracks
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderListMusic() {
    return this.state.music.map(sng => (
      <TouchableOpacity>
        <View>
          <View style={styles.listMusic}>
            <View style={{padding:10, flexDirection:'row'}}>
              <View>
                <Image source={ImgAlbum} style={{width:100, height:50, resizeMode: 'contain'}} />
              </View>
              <View style={{alignContent:'center', justifyContent:'center', flexDirection:'column'}}>
                <Text>{sng.title}</Text>
                <Text style={{fontSize:10}}>{sng.longtime}</Text>
              </View>
              <View style={{alignContent:'flex-end', justifyContent:'center', paddingLeft:70}}>
                <Image source={PlayIcon} style={{width:50, height:30, resizeMode: 'contain'}} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "#50a5f4",
          height: "100%",
          borderBottomRightRadius: 10000
        }}
      >
        <Text style={styles.album_title_head}>Recent</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                paddingLeft: 10,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              {this.renderAlbum()}
            </View>
          </ScrollView>
        </View>
        <Text style={styles.album_title_head}>List Music</Text>
        <View style={{ padding: 10 }}>{this.renderListMusic()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg_album: {
    width: 140,
    height: 100,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomWidth: 1,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  album_content: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  album_title: {
    color: "#646464",
    fontFamily: "SF Pro Text",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 15
  },
  album_singer: {
    color: "#646464",
    fontFamily: "SF Pro Text",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 15
  },
  album_img: {
    width: 90,
    height: 100,
    position: "absolute",
    resizeMode: 'contain',
    marginTop: -50
  },
  box_content_album: {
    flexDirection: "column",
    paddingTop: 60
  },
  album_title_head: {
    color: "#fafafa",
    fontFamily: "SF Pro Text",
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 30,
    paddingTop: 30
  },
  playerMinimize: {
    width: 298,
    height: 80,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 20,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    padding: 30
  },
  listMusic: {
    width: "100%",
    height: 70,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomWidth: 1,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#fff"
  }
});

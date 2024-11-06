import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ImageScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>The World's Most Interesting News</Text>
        <Text style={styles.textStyle}>
         Interesting Science Articles And Breaking News From All That's Interesting
Between new discoveries, pioneering breakthroughs, and revolutionary technologies, our modern world moves at a blistering speed. Doctors test the limits of the human body, astronauts explore beyond the stratosphere, and computer scientists reinvent what we thought machines could do. Whether we’re covering the fields of medicine, biology, or astronomy and beyond, All That’s Interesting’s science articles keep you in step with the latest science news, no matter how quickly the latest developments come.

And while staying up-to-date on everything from the world of science today, be sure to delve back into the past and uncover all the most fascinating facts about the world and stories that make the history of science just as exciting as the latest news.

Discover terrifying prehistoric creatures like the 50-foot snake known as the Titanoboa and the 60-foot shark known as the Megalodon. Then meet the scientists that allowed us to understand our world, from revered figures like Darwin and Newton to little-known characters like Vladimir Demikhov, the Soviet scientist who made a two-headed dog, or Harriet Cole, the heroic woman who donated her body to science and revolutionized our understanding of the human nervous system.

If it’s the past or the present, if it’s the unfathomable depths of the deep sea or the furthest reaches of outer space, these interesting science articles will reveal everything that makes our wondrous planet what it was, what it is, and what it will be.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: 30,
    height: 30,
    marginBottom: 50,
  },
   textStyle: {
     fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'lightblue',
    marginTop: -30
  },
});

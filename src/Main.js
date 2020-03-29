/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Linking
} from 'react-native'
import Star from 'components/star'
import json from './sample'

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  headerContainer: {
    marginHorizontal: 20,
    paddingVertical: 10
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  flatlist: {
    paddingLeft: 20
  },
  itemContainer: {
    marginRight: 20,
    width: 150
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    flexWrap: 'wrap'
  },
  subContainer: {
    marginTop: 10
  },
  category: {
    fontSize: 10
  }
});

export default class Main extends Component {

  keyExtractor = (item, idx) => idx;

  handlePressed = (item) => {
    const { image } = item;
    if (image.uri) {
      Linking.canOpenURL(image.uri).then(supported => {
        if (supported) {
          Linking.openURL(image.uri)
        }
      })
    }
  }

  renderItem = ({ item }) => {
    const { category, title, image, rating } = item

    return (
      <TouchableOpacity
        onPress={() => this.handlePressed(item)}
        activeOpacity={image.uri ? 0.7 : 1}
        style={styles.itemContainer}>
        {image.uri ?
          <Image source={{ uri: image.uri }} style={styles.img} /> :
          <Image source={image} style={styles.img} />
        }

        <View style={styles.subContainer}>
          {category !== 'advertisement' && <Text numberOfLines={1} style={styles.category}>{category}</Text>}
          {rating && <Star
            rating={rating}
            totalStar={5}
            emptyStarIcon='ios-star-outline'
            halfStarIcon='ios-star-half'
            fullStarIcon='ios-star' />}
          {title && <Text style={styles.title}>{title}</Text>}
        </View>

      </TouchableOpacity>
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>New Releases</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView>
        {this.renderHeader()}
        <FlatList
          data={json}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.flatlist}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </SafeAreaView>
    );
  }
};


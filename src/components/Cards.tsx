import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
  date: number;
  img: string;
  comments: number;
  score: number;
  user: string;
}

export const Cards = ({title, date, img, comments, score, user}: Props) => {
  return (
    <View style={{padding: 0, margin: 0}}>
      <View style={styles.card}>
        <View style={styles.cardBlock}>
          <View style={styles.cardBlockImg}>
            <Text>Poner imagen</Text>
          </View>
          <View style={styles.cardBlockLeft}>
            <View style={styles.cardDate}>
              <Text>{}</Text>
            </View>
            <View style={styles.cardBlockLeftTitle}>
              <Text>{title}</Text>
              <View style={styles.cardBlockLeftSemiblock}>
                <View>
                  <Text>{user}</Text>
                </View>
                <View>
                  <Text>Score: {score}</Text>
                </View>
                <View>
                  <Text>{comments} comments</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  cardBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardBlockLeft: {
    width: '80%',
    backgroundColor: 'red',
    padding: '5%',
  },
  cardBlockImg: {
    width: '20%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  cardDate: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  cardBlockLeftTitle: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardBlockLeftSemiblock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

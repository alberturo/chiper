import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {Cards} from '../components/Cards';

// interface Props extends StackScreenProps<any, any> {}
type resultProps = {
  kind: string;
  data: FormValues;
};

type FormValues = {
  author_fullname: string;
  title: string;
  created: number;
  url: string;
  num_comments: number;
  score: number;
};

const NewScreen = ({navigation}: any) => {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://api.reddit.com/r/pics/hot.json', {
        method: 'GET',
      });
      const jsonData = await data.json();
      setResult(jsonData.data.children);
    };
    api();
  }, []);

  console.log('RESULT', result);
  return (
    <View>
      {result &&
        result.map(value => {
          return (
            <Cards
              title={value.data.title}
              date={value.data.created}
              img={value.data.url}
              comments={value.data.num_comments}
              score={value.data.score}
              user={value.data.author_fullname}
            />
          );
        })}
      {/* <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      /> */}
    </View>
  );
};

export default NewScreen;

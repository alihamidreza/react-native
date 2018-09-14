import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      articles : {
        0 : {
          image : 'https://roocket.ir/public/image/2018/9/14/web-development.jpg',
          text : 'در بخش اول این مطلب ما ابزارها و منابع مربوط به «کتابخانه‌های جاوااسکریپت»، «فریمورک‌های فرانت-اند»، «فریمورک‌های وب اپلیکیشن»، «اجرا کننده‌های وظایف...'
        },
        1 : {
          image : 'https://roocket.ir/public/image/2018/9/14/web-development.jpg',
          text : 'امروز ۲۲ شهریور (۱۲ سپتامبر) مطابق با ۲۵۶ امین روز سال  روز جهانی برنامه نویس نام دارد. به همین خاطر تصمیم گرفتیم تخفیف برای خرید دوره های نقدی برای ه...'
        }
      }
    }
  }
  render() {
    const article = this.state.articles;
    return (
      <ScrollView>
        <Article text={article[1].text} image={article[1].image}></Article>
        <Article text={article[0].text} image={article[0].image}></Article>
        <Article text={article[1].text} image={article[1].image}></Article>
        <Article text={article[0].text} image={article[0].image}></Article>
      </ScrollView>
    );
  }
}

class Article extends React.Component {
  render() {
    const article = this.props;
    return (
      <View style={styles.card}>
          <Image source={{ uri : article.image }} style={styles.cardImage}/>
          <Text style={styles.cardText}>{article.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage : {
    width : '100%',
    height : 200
  },
  // cardRight : {
  //   width : '50%',
  // },
  // cardLeft : {
  //   width : '50%',
  // },
  card : {
    margin : 15,
    //Its for IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // its for android 
    elevation: 1,
    position:'relative',
    backgroundColor : '#fff'
  },
  cardText : {
    padding : 10,
  }
});

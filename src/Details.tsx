import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';
import { useGetWeatherByCityQuery } from './WeatherApi';

export default function Details(props : any) {
    const {name} = props.route.params;  // extracting props

    // const [data, setData] = useState();

    // useEffect(()=>{
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
    //     .then(res=> res.json())
    //     .then(res => setData(res))
    //     .catch(err => console.log(err))
    // }, []);

    const { data, isLoading } = useGetWeatherByCityQuery(name);

    const Data = ({title, value}: any) => (
        <View
          style={styles.data}>
          <Text style={{color: 'white', fontSize: 22}}>{title}</Text>
          <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
        </View>
      );

      if (isLoading) {
        return <Text>Loading...</Text>;
      }
    
      // if (error) {
      //   return <Text>Error: {error.message}</Text>;
      // }
  return (
    <View>
      <ImageBackground source={require('../assets/images/background.png')} style= {styles.bgImg} imageStyle= {styles.bgImg}>
        <View style= {styles.fullContainer}>
      <View style=  {styles.head}>
            <Icon name="menu" size={46} color="white" />
            <Image
            source={require('../assets/images/user.png')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
            </View>
            {data ? (
                <View
                style={styles.dataContainer}>
                <View>
                  <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
                  <Text style={{fontSize: 22, color: 'white', textAlign:"center"}}>
                    {data['weather'][0]['main']}
                  </Text>
                </View>
    
                <Text style={{color: 'white', fontSize: 64}}>
                  {(data['main']['temp'] - 273).toFixed(2)}&deg; C
                </Text>
    
                <View>
                <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>Weather Details</Text>
                <View style={{width: deviceWidth - 60}}>
                  <Data value={data['wind']['speed']} title="Wind" />
                  <Data value={data['main']['pressure']} title="Pressure" />
                  <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                  <Data value={data['visibility']} title="Visibility" />
                </View>
                </View>
              </View>
            ): null}
            </View>
      </ImageBackground>
    </View>
  )
}

const styles= StyleSheet.create(
    {
        bgImg: {
            height: deviceHeight,
            width: deviceWidth,
            opacity: 0.7,
            backgroundColor: 'black'
        },
        head:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: deviceWidth - 20,
        },
        data: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          dataContainer:{
            flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
          },
          fullContainer:{
            position: 'absolute',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }
    }
)
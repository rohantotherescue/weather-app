import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons';
import { cities } from './Cities';
import Cards from './Cards';


const Home= (props : any)=>  {
    const [city, setCity] = useState('');
  return (
    <View>
      <ImageBackground source={require('../assets/images/background.png')} style= {styles.bgImg} imageStyle= {styles.bgImg}>
        <View style= {styles.sneed}>
            <View style=  {styles.head}>
            <Icon name="menu" size={46} color="white" />
            <Image
            source={require('../assets/images/user.png')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 100}}>
            <Text style={{fontSize: 40, color: 'white'}}>Hello Rohan.</Text>
            {/* <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Search your city..
            </Text> */}
            <View
            style={styles.searchBar}>
            <TextInput
            value={city}
            onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={styles.searchInput}
            />
            <TouchableOpacity onPress={() =>props.navigation.navigate('Details', {name: city})}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.savedLocations}>
            Saved Locations
          </Text>
            <FlatList horizontal data={cities} renderItem={({item}) => (
                <Cards name= {item.name} image= {item.image} props= {props}/>
  )}/>
            </View>
            <View>

            </View>

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
        sneed: {
            position: 'absolute',
            paddingVertical: 20,
            paddingHorizontal: 10,
          },
          head:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          },
          searchBar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 16,
            paddingHorizontal: 10,
          },
          searchInput : {paddingHorizontal: 10, color: 'white', fontSize: 16},
          savedLocations: {color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom: 20}
          
    }
)

export default Home;
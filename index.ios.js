
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (  
     <View style={{ flex: 1 }}>
    {/*with this line above react-native fill all the content of the device with this component*/}
        <Header headerText={'Albums'} /> 
        <AlbumList />
    </View>
    //<Text>Some text</Text>
    /*Desde dentro del tag paso las propiedades a los componentes*/
);

// Render into the device
AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (

        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        /*the property 'headerText' can be any name you choose*/
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
};

// Make available the component in another part of the app
export default Header;

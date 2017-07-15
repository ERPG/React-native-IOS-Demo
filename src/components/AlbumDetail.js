import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'; // when import always as a children
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { 
        thumbnail_image, 
        title, 
        artist, 
        image, 
        url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                style={imageStyle} 
                source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
                {/*this isn't the same function as the touchable button of button component*/}
            </CardSection>
        </Card>
        //pass de text tag as a component of Card.
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
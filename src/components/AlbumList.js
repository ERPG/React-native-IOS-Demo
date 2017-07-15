import React, { Component } from 'react'; // import base class components
import { ScrollView } from 'react-native'; // get the content that we want to have Scroll
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
            .then(response => this.setState({ albums: response.data })); // setState to get the response of the call
    }

    renderAlbums() {
        return this.state.albums.map(elem => 
        <AlbumDetail key={elem.title} album={elem} />); // To render variables in JSX inside component use the {}
    }
    // Con la ultima funcion le decimos a react que renderize tambien esta parte de la clase
    render() {
        return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}

export default AlbumList;

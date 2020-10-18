import React from 'react'
import {StyleSheet, View, Text, Button, TextInput, FlatList} from 'react-native'
import films from '../helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'
class Search extends React.Component{
    // constructor(props)
    // {
    //     super(props)
    //     this.state = {films: []}
    // }
    _loadFilms(){
        // getFilmsFromApiWithSearchedText('star').then(data => this.setState({films: data.results}))

    }
    render(){
        //console.log(data)
        return(
           <View  style={styles.main_container} >
               <TextInput placeholder="Titre du film" style={styles.textinput} />
               <Button title="Recherche" onPress={() => this._loadFilms()}/>
               <FilmItem></FilmItem>
               <FlatList
                data={films}
                keyExtractor={ (item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/> }
               />
           </View>
        );
    }

}
const styles = StyleSheet.create({
    main_container: {
        marginTop: 40,
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});
    
export default Search
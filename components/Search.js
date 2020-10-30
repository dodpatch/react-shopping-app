import React from 'react'
import {StyleSheet, View, Text, Button, TextInput, FlatList, ActivityIndicator} from 'react-native'
import films from '../helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'
import {getImageFromApi} from '../API/TMDBApi'
class Search extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            films: [],
            isLoading: true
        }
        this.searchText = ""
        this.page = 0
        this.totalPages = 0
    }
    _loadFilms(){ 
        this.isLoading = true
        if(this.state.searchText.length > 0){
           getFilmsFromApiWithSearchedText(this.state.searchText, this.page + 1).then(data => 
            {
                this.page = data.page
                this.totalPages =  data.total_pages
                this.setState({
                    films: [...this.state.films, ...data.results],
                    isLoading : false,
                })
            })

        }
       
    }

    _searchTextInputChanged(text){
        this.setState({searchText: text})
    }
     _displayLoading(){
         if(this.state.isLoading)
         {
             return (
                 <View style={styles.isLoading_container}>
                     <ActivityIndicator size="Large" />
                 </View>
             )

         }
     }

     _searchFilms(){
         this.page = 0
         this.totalPages.pages = 0
         this.setState({
             films: []
         })
         this._loadFilms()
     }
     
    render(){
        console.log("RENDER")
        return(
           <View  style={styles.main_container} >
               <TextInput onSubmitEditing={() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} placeholder="Titre du film" style={styles.textinput} />
               <Button title="Recherche" onPress={() => this._searchFilms()}/>
               <FlatList
                    data={this.state.films}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(this.state.films.length > 0 && this.page < this.totalPages)
                        {
                            this._loadFilms()
                        }
                    }}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
               {/* {this._displayLoading()} */}
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
    },
    isLoading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    }

});
    
export default Search
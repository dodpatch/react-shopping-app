import React from 'react'
import {StyleSheet, View, Text, Button, TextInput, FlatList} from 'react-native'
import filmTtem from '..helpers/Fi'
import FilmItem from './FilmItem'
class Search extends React.Component{
    render(){
        return(
           <View  style={styles.main_container} >
               <TextInput placeholder="Titre du film" style={styles.textinput} />
               <Button title="Recherche" onPress={() => {}}/>
               <FlatList
               keyExtractor={(item) => item.id.toString()}
                data={films}
                renderItem={({item}) => <Text>{item.title }</Text>}
               />
           </View>
        );
    }

}
const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        flex:1,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});
    
export default Search
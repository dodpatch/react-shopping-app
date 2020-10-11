import React from 'react'
import {StyleSheet, View, Text, Button, TextInput, FlatList} from 'react-native'
import films from './helpers/filmsData'
class Search extends React.Component{
    render(){
        return(
           <View  style={styles.main_container} >
               <TextInput placeholder="Titre du film" style={styles.textinput} />
               <Button title="Rechercher" onPress={() => {}}/>
               <FlatList
                    data={[{'key': 'a'}, {'key': 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
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
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});
    
export default Search
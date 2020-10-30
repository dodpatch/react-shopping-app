import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { getImageFromApi } from '../API/TMDBApi';
class FilmItem extends React.Component{
    
    render(){ 
            const film = this.props.film
            //console.log(film)
            return(
                <View style={styles.main_container}>
                    <Image 
                    style={styles.image}
                    source={{uri: getImageFromApi(film.poster_path)}}
                    />
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{film.title}</Text>
                            <Text style={styles.vote}>{film.vote_average}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                        </View>
                        <View style={styles.date}>
            <Text style={styles.date_text}>{film.release_date}</Text>
                        </View>
                    </View>
                </View>
            );
           
        
    }
   
}

const styles = StyleSheet.create({
    main_container: {
        height: 200,
        flexDirection: 'row',

    },

    image: {

        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'

    },

    content: {
        
        // flexDirection: 'column',
        flex: 1,
        margin: 5,
        

    },

    header: {
       
            flex: 3,
            flexDirection: 'row',
    },

    title: {

        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        paddingRight: 5,
        color: '#666666',
       

    },

    vote: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 26,
       

    },

    description: {
       
        // backgroundColor: 'yellow',
        flex: 7,
        fontStyle: 'italic',

    },

    description_text: {
        fontStyle: 'italic',
        color: '#666666',

    },

    date: {
        
        textAlign: 'right',
        fontSize: 14,
    }


});

export default FilmItem
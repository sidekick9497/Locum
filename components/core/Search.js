import React from 'react';
import { StyleSheet , Platform} from 'react-native';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements'

const Search = (props) => {
    return (
        <View style={styles.container}>
            <SearchBar 
            lightTheme={true}
            platform={Platform.OS}
            onChangeText={(text) => props.searchTextEvent(text)}
            value={props.searchText.hasOwnProperty('current') ? props.searchText.current.HomeScreenSearch : '' }
            />
            {/* tweak this if standard search bar is required in both the platforms */}
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

export default Search;

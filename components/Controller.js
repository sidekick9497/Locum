import React, { Component } from 'react';
import { View } from 'react-native'
import { connect } from "react-redux";
import { changeName , changeTheme , homeSearchText } from '../redux/ActionCreators';
import BaseTabs from '../navigation/BaseStackNavigator';
import Constants  from 'expo-constants'

const mapStateToProps = state => {
    return {
        profileDetails: state.profileReducer,
        theme : state.themeReducer,
        searchText : state.searchText
    }
};

const mapDispatchToProps = dispatch => ({
    changeName: () => dispatch(changeName()),
    changeTheme : () => dispatch(changeTheme()),
    homeSearchText : (text) => dispatch(homeSearchText(text))
});

class Controller extends Component {
    componentDidMount() {
        this.props.changeName();
        this.props.changeTheme();
        this.props.homeSearchText();
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight }}>
                <BaseTabs state={this.props}/>
                {/* state distribution has to be changed */}
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);

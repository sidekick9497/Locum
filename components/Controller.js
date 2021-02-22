import React, { Component } from 'react';
import { View } from 'react-native'
import { connect } from "react-redux";
import { changeName } from '../redux/ActionCreators';
import BaseTabs from '../navigation/BaseStackNavigator';

const mapStateToProps = state => {
    return {
        profileReducer: state.profileReducer
    }
};

const mapDispatchToProps = dispatch => ({
    changeName: () => dispatch(changeName())
});

class Controller extends Component {
    componentDidMount() {
        this.props.changeName();
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight }}>
                <BaseTabs />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);

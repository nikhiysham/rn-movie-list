import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconSets = {
    Entypo: EntypoIcons,
    FontAwesome: FontAwesomeIcons,
    IonicIcons: Ionicons
}

class StarButton extends Component {
    render() {
        const { onPress, starIcon, starSize, starColor, starStyle, iconSet } = this.props;
        const Icon = IconSets[iconSet];

        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={true}>
                <Icon
                    name={starIcon}
                    size={starSize}
                    color={starColor}
                    style={starStyle} />
            </TouchableOpacity>
        )
    }
}

StarButton.defaultProps = {
    iconSet: 'IonicIcons',
    starSize: 20
};

export default StarButton;


import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import StarButton from './StarButton';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100
    }
});

class Star extends Component {
    render() {
        const {
            starSize,
            starStyle,
            totalStar,
            emptyStarIcon,
            halfStarIcon,
            fullStarIcon,
            rating,
            emptyStarColor,
            fullStarColor,
            onPress
        } = this.props;

        let starButtons = [];

        for (let i = 0; i < totalStar; i++) {
            let iconName = emptyStarIcon;
            let newStarColor = emptyStarColor;

            if (i < rating) {
                iconName = fullStarIcon;
                newStarColor = fullStarColor;

                if (i === Math.floor(rating)) {
                    iconName = halfStarIcon;
                    newStarColor = fullStarColor;
                }
            }

            const starElem = (
                <StarButton
                    key={i}
                    starIcon={iconName}
                    starSize={starSize}
                    starColor={newStarColor}
                    starStyle={starStyle}
                    onPress={onPress} />
            );

            starButtons.push(starElem);
        }

        return (
            <View style={styles.container}>
                {starButtons}
            </View>
        )
    }
}

Star.defaultProps = {
    emptyStarColor: 'orange',
    fullStarColor: 'orange',
    emptyStarIcon: 'ios-star-outline',
    starStyle: {}
};

export default Star;
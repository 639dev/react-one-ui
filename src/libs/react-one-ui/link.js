import React from 'react';

import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Text, View } from 'react-native';
import { theme, css } from './theme';

const styles = css({
    touchable: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme.primary_color
    },
    content: {}
});

export const Link = ({ title, highlight, no_feedback, style, contentContainerStyle, titleStyle, children, onPress }) => {
    const Touchable = (highlight && TouchableHighlight) || (no_feedback && TouchableWithoutFeedback) || TouchableOpacity;

    const title_comp = <Text style={[styles.title, titleStyle]}>{title}</Text>;

    const content_comp = <View style={[styles.content, contentContainerStyle]}>{children}</View>;

    return (
        <Touchable onPress={onPress} style={[styles.touchable, style]}>
            {title ? title_comp : content_comp}
        </Touchable>
    );
};
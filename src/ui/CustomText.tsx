import {
  Text,
  TextStyle,
  StyleSheet,
  Pressable,
  View,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from 'react-native';
import React, {FC, useState} from 'react';
import {Colors, Fonts} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9'
    | 'body';
  fontSize?: number;
  fontFamily?: Fonts;
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
  onMorePress?: () => void;
  more?: boolean;
}

const CustomText: FC<Props> = ({
  variant,
  fontFamily,
  fontSize,
  numberOfLines,
  style,
  onLayout,
  children,
  more = false,
  onMorePress,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasTextOverflow, setHasTextOverflow] = useState(false);

  let computedFontSize: number;
  switch (variant) {
    case 'h1':
      computedFontSize = RFValue(fontSize || 22);
      break;
    case 'h2':
      computedFontSize = RFValue(fontSize || 20);
      break;
    case 'h3':
      computedFontSize = RFValue(fontSize || 18);
      break;
    case 'h4':
      computedFontSize = RFValue(fontSize || 16);
      break;
    case 'h5':
      computedFontSize = RFValue(fontSize || 14);
      break;
    case 'h6':
      computedFontSize = RFValue(fontSize || 12);
      break;
    case 'h7':
      computedFontSize = RFValue(fontSize || 12);
      break;
    case 'h8':
      computedFontSize = RFValue(fontSize || 10);
      break;
    case 'h9':
      computedFontSize = RFValue(fontSize || 9);
      break;
    case 'body':
      computedFontSize = RFValue(fontSize || 12);
      break;
    default:
      computedFontSize = RFValue(fontSize || 12);
  }

  const fontFamilyStyle = {
    fontFamily,
  };

  const handleTextLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>,
  ) => {
    if (more && event.nativeEvent.lines) {
      setHasTextOverflow(event.nativeEvent.lines.length > (numberOfLines || 2));
    }
    onLayout?.(event);
  };

  const handleMorePress = () => {
    setIsExpanded(!isExpanded);
    onMorePress?.();
  };

  return (
    <View style={styles.container}>
      <Text
        onTextLayout={handleTextLayout}
        style={[
          styles.text,
          {color: Colors.textPrimary, fontSize: computedFontSize},
          fontFamilyStyle,
          style,
        ]}
        numberOfLines={!isExpanded ? numberOfLines : undefined}
        {...props}>
        {children}
      </Text>
      {more && hasTextOverflow && (
        <Pressable onPress={handleMorePress}>
          <Text style={styles.moreText}>
            {isExpanded ? 'show less' : 'show more'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  text: {
    textAlign: 'left',
  },
  moreText: {
    color: Colors.linkColor,
    fontFamily: Fonts.Medium,
    fontSize: RFValue(14),
  },
});

export default CustomText;

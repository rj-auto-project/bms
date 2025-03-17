import {Colors, Fonts} from '@utils/Constants';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: Colors.primary,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: RFValue(40),
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: RFValue(14),
    color: Colors.textPrimary,
  },
  textPrimary: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(16),
    color: Colors.textPrimary,
  },
  textSecondary: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(14),
    color: Colors.textSecondary,
  },
  heading: {
    fontFamily: Fonts.Bold,
    fontSize: RFValue(18),
    color: Colors.textPrimary,
  },
  button: {
    height: RFValue(48),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: Fonts.Bold,
    fontSize: RFValue(16),
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 10,
  },
});

export default GlobalStyles;

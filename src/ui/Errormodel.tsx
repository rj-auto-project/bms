import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '@ui/CustomText';
import {Colors, Fonts} from '@utils/Constants';
import {screenWidth} from '@utils/Scaling';

interface ErrorModalProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({visible, message, onClose}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.iconContainer}>
            <Icon name="error-outline" size={40} color={Colors.error} />
          </View>

          <CustomText style={styles.title} fontFamily={Fonts.Medium}>
            Oops!
          </CustomText>

          <CustomText style={styles.message} fontFamily={Fonts.Regular}>
            {message}
          </CustomText>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={onClose}>
            <CustomText style={styles.buttonText} fontFamily={Fonts.Medium}>
              OK
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: screenWidth * 0.85,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.errorLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: Colors.error,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ErrorModal;

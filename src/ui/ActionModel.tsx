// ModalManager.tsx
import CustomText from '@ui/CustomText';
import {Colors, Fonts} from '@utils/Constants';
import React, {createContext, useContext, useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface ModalConfig {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => Promise<void> | void;
  onCancel?: () => void;
}

interface ModalContextType {
  show: (config: ModalConfig) => void;
  hide: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState<ModalConfig | null>(null);

  const show = (modalConfig: ModalConfig) => {
    setConfig(modalConfig);
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    setLoading(false);
    setConfig(null);
  };

  const handleConfirm = async () => {
    if (config?.onConfirm) {
      setLoading(true);
      try {
        await config.onConfirm();
      } finally {
        hide();
      }
    } else {
      hide();
    }
  };

  const handleCancel = () => {
    config?.onCancel?.();
    hide();
  };

  return (
    <ModalContext.Provider value={{show, hide}}>
      {children}
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={handleCancel}>
        <View style={styles.overlay}>
          <View style={styles.card}>
            {config?.title && (
              <CustomText
                variant="h2"
                fontFamily={Fonts.Bold}
                style={styles.title}
                fontSize={RFValue(14)}>
                {config.title}
              </CustomText>
            )}
            <CustomText
              variant="h2"
              fontFamily={Fonts.Regular}
              style={styles.message}
              fontSize={RFValue(14)}>
              {config?.message}
            </CustomText>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={handleCancel}
                disabled={loading}>
                <CustomText
                  variant="h2"
                  fontFamily={Fonts.SemiBold}
                  style={styles.cancelButtonText}
                  fontSize={RFValue(14)}>
                  {config?.cancelText || 'Cancel'}
                </CustomText>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={handleConfirm}
                disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <CustomText
                    variant="h2"
                    fontFamily={Fonts.SemiBold}
                    style={styles.confirmButtonText}
                    fontSize={RFValue(14)}>
                    {' '}
                    {config?.confirmText || 'Confirm'}
                  </CustomText>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: Colors.backgroundSecondary,
    opacity: 0.8,
    elevation: 0.5,
  },
  confirmButton: {
    backgroundColor: Colors.greenSecondary,
  },
  cancelButtonText: {
    color: Colors.textSecondary,
  },
  confirmButtonText: {
    elevation: 0.5,
    color: '#fff',
  },
});

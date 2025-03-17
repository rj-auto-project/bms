import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export default function useKeyBoardOffsetHeight() {
  const [keyboardOffsetHeight, setKeyboardOffsetHeight] = useState(0);
  useEffect(() => {
    const keyboardDidShowListner = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.screenY);
      },
    );

    const keyboardDidHideListner = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOffsetHeight(0);
      },
    );

    const keyboardWillShowListner = Keyboard.addListener(
      'keyboardWillShow',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );

    const keyboardWillHideListner = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardOffsetHeight(0);
      },
    );
    //clean up listner
    return () => {
      keyboardDidShowListner.remove();
      keyboardDidHideListner.remove();
      keyboardWillHideListner.remove();
      keyboardWillShowListner.remove();
    };
  }, []);

  return keyboardOffsetHeight;
}

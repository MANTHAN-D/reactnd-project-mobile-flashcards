import { Platform } from 'react-native'

export const headerText = {
  fontSize: 40,
  fontFamily: Platform.OS === 'ios' ? 'Noteworthy-Bold' : 'sans-serif'
}

export const metaText = {
  fontSize: 20,
  fontFamily: Platform.OS === 'ios' ? 'Noteworthy-Light' : 'sans-serif'
}

export const buttonText = {
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'Noteworthy-Bold' : 'sans-serif'
  }

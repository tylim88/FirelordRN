import getFirestore from '@react-native-firebase/firestore'
import { ServerTimestamp } from '../types'

/**
Returns a sentinel used with @@react-native-firebase/firestore/lite#(setDoc:1) or @@react-native-firebase/firestore/lite#(updateDoc:1) to include a server-generated timestamp in the written data.
 */
export const serverTimestamp = () => {
	return getFirestore.FieldValue.serverTimestamp() as ServerTimestamp
}

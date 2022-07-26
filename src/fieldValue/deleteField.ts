import getFirestore from '@react-native-firebase/firestore'
import { DeleteField } from '../types'

/**
Returns a sentinel for use with @@react-native-firebase/firestore/lite#(updateDoc:1) or @@react-native-firebase/firestore/lite#(setDoc:1) with {merge: true} to mark a field for deletion.
 */
export const deleteField = () => {
	const ref = getFirestore.FieldValue.delete() as DeleteField
	return ref
}

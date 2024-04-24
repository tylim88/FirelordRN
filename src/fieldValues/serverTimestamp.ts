import fs from '@react-native-firebase/firestore'
import { ServerTimestamp } from '../types'

/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */
export const serverTimestamp = () =>
	fs.FieldValue.serverTimestamp() as ServerTimestamp

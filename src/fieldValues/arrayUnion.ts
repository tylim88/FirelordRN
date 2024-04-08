import fs from '@react-native-firebase/firestore'
import { ArrayRemoveOrUnionFunction } from '../types'
/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
// @ts-expect-error
export const arrayUnion: ArrayRemoveOrUnionFunction = (...elements) => {
	// TODO need to test whether it has empty array issue or not, but either way it is ok to leave this as it is
	const filler = elements.length === 0 ? [[]] : elements
	const ref = fs.FieldValue.arrayUnion(...filler)
	// @ts-expect-error
	ref.Firelord_ArrayFieldValue = elements

	return ref
}

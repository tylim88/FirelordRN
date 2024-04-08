import fs from '@react-native-firebase/firestore'
import { ArrayRemoveOrUnionFunction } from '../types'

/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */
// @ts-expect-error
export const arrayRemove: ArrayRemoveOrUnionFunction = (...elements) => {
	// TODO need to test whether it has empty array issue or not, but either way it is ok to leave this as it is
	const filler = elements.length === 0 ? [[]] : elements
	const ref = fs.FieldValue.arrayRemove(...filler)
	// @ts-expect-error
	ref.Firelord_ArrayFieldValue = elements

	return ref
}

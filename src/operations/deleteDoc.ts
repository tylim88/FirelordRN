import { DeleteDoc, OriDocumentReference } from '../types'

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */
export const deleteDoc: DeleteDoc = reference => {
	return (
		// @ts-expect-error
		(reference as OriDocumentReference)
			//
			.delete()
	)
}

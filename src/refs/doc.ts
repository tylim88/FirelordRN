import { DocCreator, OriCollectionReference } from '../types'
import { buildPathFromColIDsAndDocIDs } from './utils'
import fs from '@react-native-firebase/firestore'

export const docCreator: DocCreator =
	(fStore, ...collectionIDs) =>
	// @ts-expect-error
	(collectionReferenceOrDocumentId, ...documentIDs) => {
		if (typeof collectionReferenceOrDocumentId === 'string') {
			return fs().doc(
				buildPathFromColIDsAndDocIDs({
					collectionIDs,
					documentIDs: [
						collectionReferenceOrDocumentId,
						// @ts-expect-error
						...documentIDs,
					],
				})
			)
		} else {
			return (
				// @ts-expect-error
				(collectionReferenceOrDocumentId as OriCollectionReference)
					//
					.doc()
			)
		}
	}

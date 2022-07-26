import {
	MetaType,
	CollectionReference,
	FirestoreAndFirestoreTesting,
} from '../types'

export const collectionCreator =
	<T extends MetaType>(
		fStore: FirestoreAndFirestoreTesting,
		collectionPath: T['collectionPath']
	) =>
	(firestore?: FirestoreAndFirestoreTesting) => {
		return (firestore || fStore).collection(
			collectionPath
		) as unknown as CollectionReference<T>
	}

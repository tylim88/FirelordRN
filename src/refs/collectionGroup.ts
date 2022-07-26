import { MetaType, FirestoreAndFirestoreTesting, Query } from '../types'

export const collectionGroupCreator =
	<T extends MetaType>(
		fStore: FirestoreAndFirestoreTesting,
		collectionID: T['collectionID']
	) =>
	(firestore?: FirestoreAndFirestoreTesting) => {
		return (firestore || fStore).collectionGroup(
			collectionID
		) as unknown as Query<T>
	}

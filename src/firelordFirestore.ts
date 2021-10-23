export namespace FirelordFirestore {
	export type FieldValue =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.FieldValue

	export type DocumentData =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentData

	export type DocumentReference<T extends DocumentData = DocumentData> =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentReference<T>

	export type CollectionReference<T extends DocumentData = DocumentData> =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.CollectionReference<T>

	export type CollectionGroup<T extends DocumentData = DocumentData> = Query<T>

	export type Query<T extends DocumentData = DocumentData> =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Query<T>

	export type DocumentSnapshot<T extends DocumentData = DocumentData> =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentSnapshot<T>

	export type Transaction =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Transaction

	export type WriteBatch =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WriteBatch

	export type OrderByDirection = 'asc' | 'desc'

	export type WhereFilterOp =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WhereFilterOp

	export type CreatedUpdatedWrite = {
		createdAt: FieldValue
		updatedAt: FieldValue
	}
	export type CreatedUpdatedCompare = {
		createdAt: Date | Timestamp
		updatedAt: Date | Timestamp
	}
	export type CreatedUpdatedRead = {
		createdAt: Timestamp
		updatedAt: Timestamp
	}

	export type Timestamp =
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Timestamp
}

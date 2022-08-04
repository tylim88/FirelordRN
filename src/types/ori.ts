import { RulesTestContext } from '@firebase/rules-unit-testing'

export type Firestore = ReturnType<
	import('@react-native-firebase/app').ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Module,
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Statics
	>
>

export type FirestoreAndFirestoreTesting = Firestore | FirestoreTesting

export type FirestoreTesting = ReturnType<RulesTestContext['firestore']>

export type FirebaseFirestore =
	typeof import('@react-native-firebase/firestore').FirebaseFirestoreTypes

export type DocumentData =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentData

export type SetOptions =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SetOptions

export type SnapshotMetadata =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SnapshotMetadata

export type SnapshotListenOptions =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SnapshotListenOptions

export type Unsubscribe = ReturnType<OriCollectionReference['onSnapshot']>

export type DocumentChangeType =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentChangeType

export type OrderByDirection = import('firebase/firestore').OrderByDirection

export type WhereFilterOp =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WhereFilterOp

export type GeoPoint = FirebaseFirestore['GeoPoint']

export type Timestamp =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Timestamp

export type OriDocumentReference<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentReference<T>

export type OriCollectionReference<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.CollectionReference<T>

export type OriQuery<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Query<T>

export type OriQuerySnapshot<T = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QuerySnapshot<T>

export type OriQueryDocumentSnapshot<T = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QueryDocumentSnapshot<T>

export type OriDocumentSnapshot<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentSnapshot<T>

export type OriDocumentChange<T = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentChange<T>

export type OriWriteBatch =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WriteBatch

export type OriTransaction =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Transaction

export type OriFieldValue =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.FieldValue

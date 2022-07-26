import { RulesTestContext } from '@firebase/rules-unit-testing'

export type OriFirestore = ReturnType<
	import('@react-native-firebase/app').ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Module,
		import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Statics
	>
>

export type OriFirestoreAndFirestoreTesting = OriFirestore | OriFirestoreTesting

export type OriFirestoreTesting = ReturnType<RulesTestContext['firestore']>

export type OriFirebaseFirestore =
	typeof import('@react-native-firebase/firestore').FirebaseFirestoreTypes

export type OriDocumentData =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentData

export type OriSetOptions =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SetOptions

export type OriSnapshotMetadata =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SnapshotMetadata

export type OriSnapshotListenOptions =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SnapshotListenOptions

export type OriDocumentReference<T extends OriDocumentData = OriDocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentReference<T>

export type OriCollectionReference<
	T extends OriDocumentData = OriDocumentData
> = import('@react-native-firebase/firestore').FirebaseFirestoreTypes.CollectionReference<T>

export type OriUnsubscribe = ReturnType<OriCollectionReference['onSnapshot']>

export type OriQuery<T extends OriDocumentData = OriDocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Query<T>

export type OriQuerySnapshot<T = OriDocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QuerySnapshot<T>

export type OriQueryDocumentSnapshot<T = OriDocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QueryDocumentSnapshot<T>

export type OriDocumentSnapshot<T extends OriDocumentData = OriDocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentSnapshot<T>

export type OriDocumentChange<T = OriDocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentChange<T>

export type OriDocumentChangeType =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentChangeType

export type OriWriteBatch =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WriteBatch

export type OriTransaction =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Transaction

export type OriOrderByDirection = 'asc' | 'desc'

export type OriWhereFilterOp =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WhereFilterOp

export type OriGeoPoint = OriFirebaseFirestore['GeoPoint']

export type OriTimestamp =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Timestamp

export type OriFieldValue =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.FieldValue

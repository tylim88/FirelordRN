import {
	OriFirestore,
	OriSnapshotMetadata,
	OriSnapshotListenOptions,
	OriDocumentChangeType,
	OriFirestoreTesting,
	OriUnsubscribe,
	OriDocumentData,
} from './ori'
export type Firestore = OriFirestore
export type FirestoreTesting = OriFirestoreTesting
export type FirestoreAndFirestoreTesting = Firestore | FirestoreTesting
export type SnapshotMetadata = OriSnapshotMetadata
export type SnapshotListenOptions = OriSnapshotListenOptions
export type DocumentChangeType = OriDocumentChangeType
export type Unsubscribe = OriUnsubscribe
export type DocumentData = OriDocumentData

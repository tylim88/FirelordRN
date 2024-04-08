import fs from '@react-native-firebase/firestore'

/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */
export type FirebaseFirestore =
	typeof import('@react-native-firebase/firestore').default

export type FirestoreError = Error

/**
 * The Cloud Firestore service interface or a `Firestore` instance configured to connect to the emulator.
 */
export type Firestore = Exclude<Parameters<typeof fs>[0], undefined>

/**
 * Document data (for use with {@link @firebase/firestore/lite#(setDoc:1)}) consists of fields mapped to
 * values.
 */
export type DocumentData =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentData

/** An error returned by a Firestore operation. */
// export type FirestoreError =
// 	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.FirestoreError

/**
 * Options that configure how data is retrieved from a `DocumentSnapshot` (for
 * example the desired behavior for server timestamps that have not yet been set
 * to their final value).
 */
export type SnapshotOptions =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SnapshotListenOptions

/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */
export type SnapshotMetadata =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SnapshotMetadata

/**
 * A `QueryFieldFilterConstraint` is used to narrow the set of documents returned by
 * a Firestore query by filtering on one or more document fields.
 * `QueryFieldFilterConstraint`s are created by invoking {@link where} and can then
 * be passed to {@link (query:1)} to create a new query instance that also contains
 * this `QueryFieldFilterConstraint`.
 */
// export type QueryFieldFilterConstraint =
// 	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QueryFieldFilterConstraint

/**
 * A `QueryOrderByConstraint` is used to sort the set of documents returned by a
 * Firestore query. `QueryOrderByConstraint`s are created by invoking
 * {@link orderBy} and can then be passed to {@link (query:1)} to create a new query
 * instance that also contains this `QueryOrderByConstraint`.
 *
 * Note: Documents that do not contain the orderBy field will not be present in
 * the query result.
 */
// export type QueryOrderByConstraint =
// 	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QueryOrderByConstraint

/**
 * A `QueryLimitConstraint` is used to limit the number of documents returned by
 * a Firestore query.
 * `QueryLimitConstraint`s are created by invoking {@link limit} or
 * {@link limitToLast} and can then be passed to {@link (query:1)} to create a new
 * query instance that also contains this `QueryLimitConstraint`.
 */
// export type QueryLimitConstraint =
// 	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QueryLimitConstraint
/**
 * An options object that can be passed to {@link (onSnapshot:1)} and {@link
 * QuerySnapshot.docChanges} to control which types of changes to include in the
 * result set.
 */
export type SnapshotListenOptions =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SnapshotListenOptions

/**
 * A function returned by `onSnapshot()` that removes the listener when invoked.
 */
export type Unsubscribe = ReturnType<
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.CollectionReference['onSnapshot']
>

/**
 * The type of a `DocumentChange` may be 'added', 'removed', or 'modified'.
 */
export type DocumentChangeType =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentChangeType

/**
 * The direction of a {@link orderBy} clause is specified as 'desc' or 'asc'
 * (descending or ascending).
 */
export type OrderByDirection = 'desc' | 'asc'

/**
 * Filter conditions in a {@link where} clause are specified using the
 * strings '&lt;', '&lt;=', '==', '!=', '&gt;=', '&gt;', 'array-contains', 'in',
 * 'array-contains-any', and 'not-in'.
 */
export type WhereFilterOp =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WhereFilterOp

/**
 * An immutable object representing a geographic location in Firestore. The location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90]. Longitude values are in the range of [-180, 180].
 */
export type GeoPoint = FirebaseFirestore['GeoPoint']

/**
 * An immutable object representing an array of bytes.
 */
// export type Bytes = FirebaseFirestore['Bytes']

/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
export type Timestamp =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Timestamp

export type OriDocumentReference<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentReference<T>

export type OriCollectionReference<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.CollectionReference<T>

export type OriQuery<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Query<T>

export type OriQuerySnapshot<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QuerySnapshot<T>

export type OriQueryDocumentSnapshot<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QueryDocumentSnapshot<T>

export type OriDocumentSnapshot<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentSnapshot<T>

export type OriDocumentChange<T extends DocumentData = DocumentData> =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.DocumentChange<T>

export type OriSetOptions =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.SetOptions

export type OriWriteBatch =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.WriteBatch

export type OriTransaction =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.Transaction

export type OriFieldValue =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.FieldValue

export type OriQueryCompositeFilterConstraint =
	import('@react-native-firebase/firestore').FirebaseFirestoreTypes.QueryCompositeFilterConstraint

export type OriQueryConstraint = {
	// /
}

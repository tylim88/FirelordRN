import { GetFirelordShakable } from './types'
import {
	docCreator,
	collectionCreator,
	collectionGroupCreator,
	andCreator,
	orCreator,
} from './refs'
import fs from '@react-native-firebase/firestore'

export const getFirestore = () => {}

export const getFirelordShakable: GetFirelordShakable =
	({
		docCreator,
		collectionCreator,
		collectionGroupCreator,
		andCreator,
		orCreator,
	}) =>
	// @ts-expect-error
	(firestore, ...collectionIDs) => {
		return {
			...(docCreator && {
				doc: docCreator(firestore, ...collectionIDs),
			}),
			...(collectionCreator && {
				collection: collectionCreator(firestore, ...collectionIDs),
			}),
			...(collectionGroupCreator && {
				collectionGroup: collectionGroupCreator(
					firestore,
					collectionIDs[collectionIDs.length - 1]!
				),
			}),
			...(orCreator && { or: orCreator() }),
			...(andCreator && { and: andCreator() }),
		}
	}

/**
 * Gets a FirelordReference instance that refers to the doc, collection, and collectionGroup at the specified absolute path.
 * @param firestore - A reference to the root `Firestore` instance.
 * @param collectionIDs - all the collectionID(s) needed to build this collection path.
 * @returns function of DocumentReference, CollectionReference, CollectionGroup and composite queries.
 */
export const getFirelord = getFirelordShakable({
	docCreator,
	collectionCreator,
	collectionGroupCreator,
	andCreator,
	orCreator,
})

export const toTimestamp = ({
	seconds,
	nanoseconds,
}: {
	seconds: number
	nanoseconds: number
}) => {
	return new fs.Timestamp(seconds, nanoseconds)
}

export class Timestamp extends fs.Timestamp {}
export class GeoPoint extends fs.GeoPoint {}
const useEmulator = fs().useEmulator

export const connectFirestoreEmulator = (
	...arg: Parameters<typeof useEmulator>
) => {
	return useEmulator(...arg)
}

export * from './batch'
export * from './transaction'
export * from './fieldValues'
export * from './operations'
export * from './queryConstraints'
export * from './refs'
export * from './equal'

export type {
	MetaType,
	MetaTypeCreator,
	AbstractMetaTypeCreator,
	ServerTimestamp,
	Delete,
	PossiblyReadAsUndefined,
	DocumentReference,
	CollectionReference,
	Query,
	DocumentSnapshot,
	QuerySnapshot,
	QueryDocumentSnapshot,
	WriteBatch,
	RunTransaction,
	GetDocIds,
	Transaction,
	GetCollectionIds,
	FirelordRef,
	OnSnapshot,
	Unsubscribe,
	ArrayUnionOrRemove,
} from './types'

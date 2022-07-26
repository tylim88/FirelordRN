import { MetaType } from './metaTypeCreator'
import { Firestore } from './alias'
import { QuerySymbol } from './unique'

export interface DocumentReference<T extends MetaType> {
	/**
	 * The {@link Firestore} instance the document is in.
	 * This is useful for performing transactions, for example.
	 */
	firestore: Firestore
	/**
	 * The document's identifier within its collection.
	 */
	id: T['docID']
	/**
	 * The collection this `DocumentReference` belongs to.
	 */
	parent: CollectionReference<T>
	/**
	 * A string representing the path of the referenced document (relative
	 * to the root of the database).
	 */
	path: T['docPath']
}

export interface CollectionReference<T extends MetaType> extends Query<T> {
	/** The collection's identifier. */
	id: T['docID']
	/**
	 * A string representing the path of the referenced collection (relative
	 * to the root of the database).
	 */
	path: T['docPath']
	/**
	 * A reference to the containing `DocumentReference` if this is a
	 * subcollection. If this isn't a subcollection, the reference is null.
	 */
	parent: T['parent']
}

// Query<T> is needed in order to infer the type correctly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export declare class Query<T extends MetaType> {
	protected constructor()

	protected type: QuerySymbol
}

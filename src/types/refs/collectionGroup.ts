import { MetaType } from '../metaTypeCreator'
import { Query } from './query'

/**
 * A {@link CollectionGroup} refers to all documents that are contained in a
 * collection or sub-collection with a specific collection ID.
 */
export interface CollectionGroup<T extends MetaType> extends Query<T> {}

export type CollectionGroupFunction<T extends MetaType> = {
	/**
	 *  related documentations:
	 *  - {@link https://firelordjs.com/quick_start/#query query}
	 *  - {@link https://firelordjs.com/quick_start/#onsnapshot onSnapshot}
	 * @returns — The created {@link CollectionGroup}.
	 */
	(): CollectionGroup<T>
}

export type CollectionGroupCreator = <T extends MetaType>(
	fStore: void,
	collectionID: T['collectionID']
) => CollectionGroupFunction<T>

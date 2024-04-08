import { CollectionGroupCreator } from '../types'
import fs from '@react-native-firebase/firestore'
export const collectionGroupCreator: CollectionGroupCreator =
	// @ts-expect-error
	(fStore, collectionID) => () => {
		return fs().collectionGroup(collectionID)
	}

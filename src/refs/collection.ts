import { CollectionCreator } from '../types'
import { buildPathFromColIDsAndDocIDs } from './utils'
import fs from '@react-native-firebase/firestore'

export const collectionCreator: CollectionCreator =
	(fStore, ...collectionIDs) =>
	// @ts-expect-error
	(...documentIDs) => {
		return fs().collection(
			buildPathFromColIDsAndDocIDs({
				collectionIDs,
				documentIDs,
			})
		)
	}

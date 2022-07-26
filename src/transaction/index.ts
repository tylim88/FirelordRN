import { setCreator } from './set'
import { updateCreator } from './update'
import { getCreator } from './get'
import { deleteCreator } from './delete'
import { RunTransaction } from '../types'
import getFirestore from '@react-native-firebase/firestore'
import { isFirestore } from '../utils'

// @ts-expect-error
export const runTransaction: RunTransaction = (firestore, updateFunction) => {
	const fStore = isFirestore(firestore) ? firestore : getFirestore()
	const callback = isFirestore(firestore) ? updateFunction : firestore
	return fStore.runTransaction(async transaction => {
		const set = setCreator(transaction)
		const update = updateCreator(transaction)
		const get = getCreator(transaction)
		const delete_ = deleteCreator(transaction)
		return callback({ set, update, get, delete: delete_ })
	})
}

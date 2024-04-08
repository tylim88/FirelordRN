import { refEqual } from './refEqual'
import { userRefCreator, User } from '../utilForTests'
import { DocumentReference, CollectionReference } from '../types'
import fs from '@react-native-firebase/firestore'

const docRef = userRefCreator().doc
const colRef = userRefCreator().collection
describe('test refEqual', () => {
	it('test equal', () => {
		expect(
			refEqual(docRef('FirelordTest', 'abc'), docRef('FirelordTest', 'abc'))
		).toBe(true)
		expect(
			refEqual(
				docRef('FirelordTest', 'abc'),
				fs().doc(
					'topLevel/FirelordTest/Users/abc'
				) as unknown as DocumentReference<User>
			)
		).toBe(true)
		expect(refEqual(colRef('FirelordTest'), colRef('FirelordTest'))).toBe(true)
		expect(
			refEqual(
				colRef('FirelordTest'),
				fs().collection(
					colRef('FirelordTest').path
				) as unknown as CollectionReference<User>
			)
		).toBe(true)
	})
	it('test not equal', () => {
		expect(
			refEqual(docRef('FirelordTest', 'abc'), docRef('FirelordTest', 'abcd'))
		).toBe(false)
		expect(
			refEqual(
				docRef('FirelordTest', 'abc'),
				fs().doc(
					'topLevel/FirelordTest/Users/ab1'
				) as unknown as DocumentReference<User>
			)
		).toBe(false)
		expect(
			refEqual(
				colRef('FirelordTest'),
				fs().collection('a/b/c1') as unknown as CollectionReference<User>
			)
		).toBe(false)
	})
})

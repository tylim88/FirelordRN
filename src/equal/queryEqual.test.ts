import { query } from '../refs'
import { queryEqual } from './queryEqual'
import { userRefCreator } from '../utilForTests'
import { where, orderBy } from '../queryConstraints'

const colRef = userRefCreator().collection('FirelordTest')
const colRef2 = userRefCreator().collection('FirelordTest')
const groupRef = userRefCreator().collectionGroup
describe('test queryEqual', () => {
	it('test equal', () => {
		expect(
			queryEqual(
				query(colRef, where('a.b.c', '==', 1)),
				query(colRef2, where('a.b.c', '==', 1))
			)
		).toBe(true)
		expect(
			queryEqual(query(colRef, orderBy('a.b')), query(colRef2, orderBy('a.b')))
		).toBe(true)
	})
	it('test not equal', () => {
		expect(
			queryEqual(
				query(colRef, where('a.b.c', '==', 1)),
				query(colRef2, where('age', '==', 1))
			)
		).toBe(false)
		expect(
			queryEqual(
				query(groupRef(), where('a.b.c', '==', 1)),
				query(groupRef(), where('age', '==', 1))
			)
		).toBe(false)
		expect(
			queryEqual(
				query(colRef, orderBy('a.b')),
				query(colRef2, where('a.b.c', '==', 1))
			)
		).toBe(false)
	})
})

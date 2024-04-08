import { getFirelord } from '..'
import { setDoc, getDoc } from '../operations'
import { MetaTypeCreator, ServerTimestamp } from '../types'
import { serverTimestamp } from './serverTimestamp'

describe('test serverTimestamp', () => {
	const ref = getFirelord<
		MetaTypeCreator<{ a: ServerTimestamp }, 'serverTimestamp', string>
	>(undefined, 'serverTimestamp')
	const docRef = ref.doc('serverTimestamp')
	it('test with set', async () => {
		await setDoc(docRef, { a: serverTimestamp() })
		const docSnap = await getDoc(docRef)
		const data = docSnap.data()
		expect(typeof data?.a?.nanoseconds).toBe('number')
	})
})

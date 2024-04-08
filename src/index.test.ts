import { getFirelord, MetaTypeCreator } from '.'
import { User } from './utilForTests'

type parent = MetaTypeCreator<
	{
		a: { b: string; c: boolean }
		d: number
		e: { f: string[] }
	},
	'parent',
	string
>

type Child = MetaTypeCreator<
	{
		a: { b: string; c: boolean }
		d: number
		e: { f: string[] }
	},
	'child',
	string,
	parent
>

describe('test', () => {
	it('test pass', () => {
		;() => {
			getFirelord<User>(undefined, `topLevel`, `Users`)
			getFirelord<Child>(undefined, 'parent', 'child')
		}
	})
	it('test incorrect collection', () => {
		;() => {
			getFirelord<User>(
				undefined,
				// @ts-expect-error
				`topLe1vel`,
				`Users`
			)
			getFirelord<User>(
				undefined,
				`topLevel`,
				// @ts-expect-error
				`Use1rs`
			)
			getFirelord<Child>(
				undefined,
				// @ts-expect-error
				'paraent',
				'child'
			).collection('abc')

			getFirelord<Child>(
				undefined,
				'parent',
				'abc',
				// @ts-expect-error

				'child'
			)
		}
	})
	it('test collection path type', () => {
		;() => {
			getFirelord<User>(undefined, `topLevel`, `Users`).collection(
				// @ts-expect-error
				'abc'
			)
			const userRef =
				// @ts-expect-error
				getFirelord<User>(
					//
					'User1s'
				)

			userRef.doc(
				// @ts-expect-error
				123
			)
			userRef.collection(
				// @ts-expect-error
				false
			)
			userRef.collectionGroup(
				// @ts-expect-error
				{}
			)
		}
	})
})

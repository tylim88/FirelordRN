import { Filter } from '@react-native-firebase/firestore'
import { AndCreator, OrCreator } from '../types'
import { compositeQueryBuilder } from './utils'

export const andCreator: AndCreator =
	() =>
	// @ts-expect-error
	(...queryConstraints) => {
		const constraints = compositeQueryBuilder(
			// @ts-expect-error
			queryConstraints
		)
		return {
			type: 'and',
			constraints,
			ref: Filter.and(...constraints),
		}
	}

export const orCreator: OrCreator =
	() =>
	// @ts-expect-error
	(...queryConstraints) => {
		const constraints = compositeQueryBuilder(
			// @ts-expect-error
			queryConstraints
		)
		return {
			type: 'or',
			constraints,
			ref: Filter.or(...constraints),
		}
	}

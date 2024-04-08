import { MetaType, OriQuery, QueryFunction } from '../types'
import { handleEmptyArray } from './utils'
/**
 * Creates a new immutable instance of {@link Query} that is extended to also include
 * additional query constraints.
 *
 * @param query - The {@link Query} instance to use as a base for the new constraints.
 * @param queryConstraints - The list of {@link QueryConstraint}s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */
// @ts-expect-error
export const query: QueryFunction = (query, ...queryConstraints) => {
	const ref = query as unknown as OriQuery<MetaType>
	// ! need revisit
	return queryConstraints.reduce((ref, qc) => {
		const type = qc.type
		if (type === 'where') {
			// @ts-expect-error
			return ref[type](qc.fieldPath, qc.opStr, qc.value)
		} else if (type === 'orderBy') {
			// @ts-expect-error
			return ref[type](qc.fieldPath, qc.directionStr)
		} else if (['limit', 'limitToLast'].includes(type)) {
			// @ts-expect-error
			return ref[type](qc.value)
		} else if (['startAt', 'startAfter', 'endAt', 'endBefore'].includes(type)) {
			// @ts-expect-error
			return handleEmptyArray(qc.values, ref, () => ref[type](...qc.values))
		} else if (['and', 'or'].includes(type)) {
			// @ts-expect-error
			return ref.where(qc.ref)
		}
		// @ts-expect-error
	}, ref)
}

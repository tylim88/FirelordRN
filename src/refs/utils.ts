import { Filter } from '@react-native-firebase/firestore'
import { QueryFilterConstraints } from '../types'

export const buildPathFromColIDsAndDocIDs = ({
	collectionIDs,
	documentIDs,
}: {
	collectionIDs: string[]
	documentIDs: string[]
}) => {
	return collectionIDs.reduce((acc, collectionId, index) => {
		const documentID = documentIDs[index] ? `${documentIDs[index]}` : ''
		return `${acc}${collectionId}/${documentID}`
	}, '')
}

export const handleEmptyArray = <T>(
	arr: unknown[],
	isEmpty: T,
	isFilled: () => T
) => {
	return arr.length === 0 ? isEmpty : isFilled()
}

export const compositeQueryBuilder = (
	queryConstraints: QueryFilterConstraints[]
) => {
	return queryConstraints.map(qc => {
		if (qc.type === 'where') {
			return Filter(qc.fieldPath, qc.opStr, qc.value)
		} else {
			return qc.ref
		}
	})
}

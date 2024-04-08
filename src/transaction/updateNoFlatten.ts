import { OriTransaction, TransactionUpdateNoFlatten } from '../types'
import { removeFieldValueInhomogeneousProps } from '../fieldValues'

export const updateNoFlattenCreator =
	(transaction: OriTransaction): TransactionUpdateNoFlatten =>
	// @ts-expect-error
	(reference, data) => {
		return transaction.update(
			// @ts-expect-error
			reference,
			removeFieldValueInhomogeneousProps(data)
		)
	}

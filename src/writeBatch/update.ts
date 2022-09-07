import { OriWriteBatch, OriDocumentReference, WriteBatchUpdate } from '../types'
import { flatten } from '../utils'
import { removeFieldValueInhomogeneousProps } from '../fieldValue'

export const updateCreator = (writeBatch: OriWriteBatch) =>
	((reference: OriDocumentReference, data: Record<string, unknown>) => {
		return writeBatch.update(
			reference,
			flatten(removeFieldValueInhomogeneousProps(data))
		)
	}) as unknown as WriteBatchUpdate

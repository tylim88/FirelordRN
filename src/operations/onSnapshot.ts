import {
	FirestoreError,
	SnapshotListenOptions,
	OriQuery,
	OnSnapshot,
} from '../types'

export const isOptions = (
	arg:
		| ((error: FirestoreError) => void)
		| (() => void)
		| SnapshotListenOptions
		| undefined
): arg is SnapshotListenOptions => {
	const v = arg as Partial<SnapshotListenOptions>
	return v?.includeMetadataChanges !== undefined // includeMetadataChanges is boolean, so check for undefined
}

export const onSnapshot: OnSnapshot = (reference, onNext, onError, options) => {
	const newOnError = isOptions(onError) ? undefined : onError
	const newOptions = isOptions(onError) ? onError : options || {}
	return (
		// @ts-expect-error
		(reference as OriQuery)
			// @ts-expect-error
			.onSnapshot(
				//
				{
					includeMetadataChanges: false,
					...newOptions,
				},
				{
					next: onNext,
					...(newOnError ? { error: newOnError } : {}),
				}
			)
	)
}

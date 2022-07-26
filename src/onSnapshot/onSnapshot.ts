import { OriSnapshotListenOptions, OriQuery, OnSnapshot } from '../types'

export const isOptions = (
	arg:
		| ((error: Error) => void)
		| (() => void)
		| OriSnapshotListenOptions
		| undefined
): arg is OriSnapshotListenOptions => {
	const v = arg as Partial<OriSnapshotListenOptions>
	return v?.includeMetadataChanges !== undefined // includeMetadataChanges is boolean, so check for undefined
}

export const onSnapshot: OnSnapshot = (
	reference,
	onNext,
	onError?: ((error: Error) => void) | OriSnapshotListenOptions,
	options?: OriSnapshotListenOptions
) => {
	const newOnError = isOptions(onError) ? undefined : onError
	const newOptions = options || (isOptions(onError) ? onError : undefined)

	return newOptions
		? // @ts-expect-error
		  (reference as unknown as OriQuery).onSnapshot(newOptions, {
				next: onNext,
				error: newOnError,
		  })
		: (reference as unknown as OriQuery).onSnapshot(
				// @ts-expect-error
				onNext,
				newOnError
		  )
}

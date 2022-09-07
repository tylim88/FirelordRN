import { getFirelord, getFirestore } from 'firelordrn'
import { Example } from './define_meta_type'

export const db = getFirestore() // you can skip this line

// Recommendation: Export this if the collection is sub-collection and then fill in collection path later, because sub collection most likely have dynamic document ID.
export const firelordExample = getFirelord<Example>() // or getFirelord<Example>(db)
// then call them using
// const example = firelordExample(`parentCollectionName/${someDocId}/SomeCollectionName`) // this is your firelordRef

// Recommendation: Export this if the collection is root collection
export const example = firelordExample('SomeCollectionName') // this is your firelordRef

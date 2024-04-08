import { MetaType } from '../metaTypeCreator'
import { QueryAllConstraints, QueryConstraints } from '../queryConstraints'
import {
	QueryConstraintLimitation,
	FlattenQueryCompositeFilterConstraint,
	ValidateTopLevelQueryCompositeFilterPartOne,
	ValidateTopLevelQueryCompositeFilterPartTwo,
	ValidateOrderByAndInequalityWhere,
} from '../queryConstraintsLimitations'
import { CollectionReference } from './collection'
import { CollectionGroup } from './collectionGroup'

declare const query: unique symbol

type QuerySymbol = typeof query

declare class QueryClass {
	protected 'Firelord_Do_Not_Access': QuerySymbol
}
/**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */
// Query<T> is needed in order to infer the type correctly
export interface Query<T extends MetaType> extends QueryClass {}

export type GeneralQuery<T extends MetaType> =
	| Query<T>
	| CollectionReference<T>
	| CollectionGroup<T>

export type QueryFunction = <
	T extends MetaType,
	Q extends GeneralQuery<T>,
	const QQCs extends readonly QueryAllConstraints[]
>(
	query: Q extends never ? Q : GeneralQuery<T>,
	...queryConstraints: QQCs extends never
		? QQCs
		: T extends infer V extends MetaType
		? ValidateTopLevelQueryCompositeFilterPartOne<
				V,
				QQCs
		  > extends infer B extends string
			? B
			: ValidateTopLevelQueryCompositeFilterPartTwo<
					V,
					QQCs
			  > extends infer C extends string
			? C
			: FlattenQueryCompositeFilterConstraint<
					V,
					QQCs
			  > extends infer AllFlattenQCs extends QueryConstraints[]
			? ValidateOrderByAndInequalityWhere<
					V,
					AllFlattenQCs
			  > extends infer K extends string
				? K
				: QueryConstraintLimitation<V, Q, QQCs, [], AllFlattenQCs>
			: never
		: never
) => Query<T>

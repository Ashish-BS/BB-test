import { MetaType } from '../common/pagination';
import { CategoryType } from '../data/category';

export interface CategoryReturnType {
	data: CategoryType[];
	meta: MetaType;
}

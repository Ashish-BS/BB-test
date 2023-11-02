import { MetaType } from '../common/pagination';
import { BlogAPIResponseType } from '../data/blog';

export interface BlogReturnType {
	data: BlogAPIResponseType[];
	meta: MetaType
}

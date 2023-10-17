import { MetaType } from '../common/pagination'
import { BlogAPIResponseType } from '../data/blog';
import { CategoryType } from '../data/category';

export interface BlogPageProps {
	blogs?: BlogAPIResponseType[];
	featuredBlogs?: BlogAPIResponseType[] | null;
	categories?: CategoryType[];
	metaData?: MetaType;
	selectedCategoryName?: string;
	searchBlog?: string;
	category?: string;
}

export interface BlogDetailsPageProps {
	blog: BlogAPIResponseType;
	relatedBlogs: BlogAPIResponseType[];
	metaData: MetaType;
}

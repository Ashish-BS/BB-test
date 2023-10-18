import { CategoryType } from "./category";

export interface BlogAPIResponseType {
	id: number;
	attributes: {
		title: string;
		slug: string;
		content: string;
		updatedAt: Date;
		createdAt: Date;
		publishedAt: Date;
		publishDate: Date;
		isFeaturedPost: boolean;
		quote: string;
		quoteAuthor: string;
		featuredImage: {
			data: {
				attributes: {
					url: string;
					alternativeText: string;
				};
			};
		};
		author: {
			data: AuthorType;
		};
		category: {
			data: CategoryType
		};
		metaTitle: string;
		metaDescription: string;
		metaKeywords: string;
		relatedPost1: {
			data: BlogAPIResponseType[];
		};
		relatedPost2: {
			data: BlogAPIResponseType[];
		};
	};
}



export interface AuthorType{
	id: number;
	attributes: {
		fullname: string;
		email: string;
		createdAt: Date;
		updatedAt: Date;
		publishedDate: Date;
	};
}
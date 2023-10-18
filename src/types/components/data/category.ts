export interface CategoryType {
	id: number;
	attributes: {
		name: string;
		createdAt: Date;
		updatedAt: Date;
		publishedAt: Date;
		isActive: boolean;
		slug:string;
		isFeatured: boolean;
	};
}

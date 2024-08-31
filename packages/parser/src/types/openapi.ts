export interface OpenAPISpec {
	openapi: string;
	info: {
		title: string;
		description: string;
		version: string;
	};
	servers: Array<{
		url: string;
		description: string;
	}>;
	paths: {
		[path: string]: {
			[method: string]: {
				tags?: string[];
				summary?: string;
				description?: string;
				parameters?: any[];
				requestBody?: any;
				responses?: any;
			};
		};
	};
	components?: {
		schemas?: {
			[key: string]: any;
		};
	};
}

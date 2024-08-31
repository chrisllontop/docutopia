export interface OpenAPIParserOutput {
	info: {
		title: string;
		description: string;
		version: string;
	};
	servers: Array<{
		url: string;
		description: string;
	}>;
	groups: Array<{
		group: string;
		description: string;
		endpoints: Array<{
			path: string;
			method: string;
			summary: string;
			description: string;
			parameters: any[];
			requestBody: any;
			responses: any;
		}>;
	}>;
	schemas: {
		[key: string]: any;
	};
	sidebar: Array<{
		group: string;
		description: string;
		endpoints: Array<{
			method: string;
			description: string;
			path: string;
		}>;
	}>;
}

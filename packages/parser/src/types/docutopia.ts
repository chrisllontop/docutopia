type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'TRACE';

type MethodsWithRequestBody = 'POST' | 'PUT' | 'DELETE';

type Responses = {
	code: number;
	description: string;
	content?: {};
}

type Parameters = {
	name: string;
	required: boolean;
	description?: string;
}

type Variables = {
	name: string;
	default: string;
	description: string;
	enum: string[];
}

type EndpointWithoutRequestBody = {
  path: string;
  method: Exclude<HttpMethod, MethodsWithRequestBody>;
  summary?: string;
  description?: string;
	variables?: Variables[];
  parameters: Parameters[];
  responses: Responses[];
};

type EndpointWithRequestBody = {
  path: string;
  method: MethodsWithRequestBody; 
  summary?: string;
  description?: string;
  parameters: Parameters[];
	variables?: Variables[];
  requestBody: Array<{
		required: boolean,
		content:{}
	}>; 
  responses: Responses[];
};

type Endpoint = EndpointWithoutRequestBody | EndpointWithRequestBody;

type SchemaProperty = 
  | { name: string; type: 'string'; example: string }
  | { name: string; type: 'boolean'; example: boolean };

export interface DocutopiaParserOutput {
	info: {
		title: string;
		description?: string;
		version: string;
	};
	servers: Array<{
		url: string;
		description?: string;
	}>;
	groups: Array<{
		group: string;
		description: string;
		endpoints: Array<Endpoint>;
	}>;
	schemas: Array<{
		name: string, 
		properties: Array<SchemaProperty>
	}>;
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

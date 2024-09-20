type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'TRACE';

type MethodsWithRequestBody = 'POST' | 'PUT' | 'DELETE';

type Responses = {
	code: number;
	description: string;
	content?: {};
}

type Parameters = {
	in: 'path' | 'query' | 'header' | 'cookie'
	name: string;
	required: boolean;
	description?: string;
	enum: string[];
	schema: SchemaProperty;
	allowReserved: boolean;
}

type Variables = {
	name: string;
	default: string;
	description: string;
	enum: string[];
}

type EndpointWithoutRequestBody = {
  path: string;
	deprecated: boolean; 
  method: Exclude<HttpMethod, MethodsWithRequestBody>;
  summary?: string;
  description?: string;
	variables?: Variables[];
  parameters: Parameters[];
  responses: Responses[];
};

type EndpointWithRequestBody = {
  path: string;
	deprecated: boolean;
  method: MethodsWithRequestBody; 
  summary?: string;
  description?: string;
  parameters: Parameters[];
	variables?: Variables[];
  requestBody: Array<{
		required: boolean,
		content:{
			mediaTypes: string
		}
	}>; 
  responses: Responses[];
};

type Endpoint = EndpointWithoutRequestBody | EndpointWithRequestBody;

type SchemaPropertyArray = Exclude<SchemaProperty, { type: 'array' }>;

type SchemaProperty = 
  | { name: string; type: 'string'; example: string }
  | { name: string; type: 'boolean'; example: boolean }
  | { 
      name: string; 
      type: 'array'; 
      item: SchemaPropertyArray; 
      example: Array<SchemaPropertyArray['example']>;
    };


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

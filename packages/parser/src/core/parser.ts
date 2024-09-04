import type { OpenAPISpec } from "@/types/openapi";
import type { BaseParser } from "@/parsers/base";
import { OpenAPIParserV3 } from "@/parsers/openapi-v3";

export class ParserFactory {
	static createParser(spec: OpenAPISpec): BaseParser {
		const version = spec.openapi;
		if (version.startsWith("3.0")) {
			return new OpenAPIParserV3(spec);
		}
		throw new Error(`Unsupported OpenAPI version: ${version}`);
	}
}

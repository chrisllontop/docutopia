import type { OpenAPISpec } from "@/types/openapi";
import { SpecsLoader } from "@/loader";
import type { OpenAPIParserOutput } from "@/types/output";
import { OpenAPIParserV3 } from "@/parsers/v3";

export class OpenAPIParser {
	private static instance: OpenAPIParser;
	private spec: OpenAPISpec;

	private constructor(spec: OpenAPISpec) {
		this.spec = spec;
	}

	public static async getInstance(source: string): Promise<OpenAPIParser> {
		if (!this.instance) {
			const spec = await SpecsLoader.getInstance(source).loadSpec();
			this.instance = new this(spec);
		}
		return this.instance;
	}

	public parse(): OpenAPIParserOutput {
		const version = this.spec.openapi;

		if (version.startsWith("3.0")) {
			const parser = new OpenAPIParserV3(this.spec);
			return parser.parse();
		}

		throw new Error(`Unsupported OpenAPI version: ${version}`);
	}
}

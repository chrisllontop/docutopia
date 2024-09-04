import { SpecsLoader } from "@/loader";
import type { OpenAPIParserOutput } from "@/types/output";
import { OpenAPIParserV3 } from "@/parsers/v3";

export class DocutopiaParser {
	public static async parse(source: string): Promise<OpenAPIParserOutput> {
		const specsLoader = new SpecsLoader(source);
		const spec = await specsLoader.loadSpec();
		const version = spec.openapi;

		if (version.startsWith("3.0")) {
			const openAPIParser = new OpenAPIParserV3(spec);
			return openAPIParser.parse();
		}

		throw new Error(`Unsupported OpenAPI version: ${version}`);
	}
}

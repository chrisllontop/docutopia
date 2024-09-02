import type { OpenAPIParserOutput } from "@/types/output";
import type { OpenAPISpec } from "@/types/openapi";

export abstract class BaseParser {
	protected spec: OpenAPISpec;

	constructor(spec: OpenAPISpec) {
		this.spec = spec;
	}

	public abstract parse(): OpenAPIParserOutput;

	protected resolveRef(ref: string): any {
		const [_, type, name] = ref.split("/");
		if (
			type === "components" &&
			this.spec.components &&
			this.spec.components.schemas
		) {
			return this.spec.components.schemas[name];
		}
		throw new Error(`Reference ${ref} not found`);
	}

	protected replaceRefs(obj: any): any {
		if (typeof obj === "object" && obj !== null) {
			if (obj.$ref) {
				return this.resolveRef(obj.$ref);
			}
			for (const key in obj) {
				obj[key] = this.replaceRefs(obj[key]);
			}
		}
		return obj;
	}
}

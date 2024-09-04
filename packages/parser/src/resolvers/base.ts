import type { OpenAPISpec } from "@/types/openapi";

export abstract class BaseResolver {
	protected spec: OpenAPISpec;

	constructor(spec: OpenAPISpec) {
		this.spec = spec;
	}

	public abstract resolveRef(ref: string): any;

	public replaceRefs(obj: any): any {
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

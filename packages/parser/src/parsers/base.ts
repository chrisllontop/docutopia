import type { BaseResolver } from "@/resolvers/base";
import { ResolverFactory } from "@/resolvers/factory";
import type { OpenAPISpec } from "@/types/openapi";
import type { DocutopiaParserOutput } from "@/types/output";

export abstract class BaseParser {
	protected spec: OpenAPISpec;
	protected resolver: BaseResolver;

	constructor(spec: OpenAPISpec) {
		this.spec = spec;
		this.resolver = ResolverFactory.createResolver(spec);
	}

	public abstract parse(): DocutopiaParserOutput;

	protected replaceRefs(obj: any): any {
		return this.resolver.replaceRefs(obj);
	}
}

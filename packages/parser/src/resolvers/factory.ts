import type { BaseResolver } from "@/resolvers/base";
import { OpenAPIResolverV3 } from "@/resolvers/openapi-v3";
import type { OpenAPISpec } from "@/types/openapi";

export class ResolverFactory {
	public static createResolver(spec: OpenAPISpec): BaseResolver {
		const version = spec.openapi;
		if (version.startsWith("3.0")) {
			return new OpenAPIResolverV3(spec);
		}
		throw new Error(`Unsupported OpenAPI version: ${version}`);
	}
}

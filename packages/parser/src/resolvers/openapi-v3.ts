import { BaseResolver } from "@/resolvers/base";

export class OpenAPIResolverV3 extends BaseResolver {
	public resolveRef(ref: string): any {
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
}

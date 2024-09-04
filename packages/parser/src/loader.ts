import type { OpenAPISpec } from "@/types/openapi";
import * as yaml from "js-yaml";

export class SpecsLoader {
	private readonly source: string;

	constructor(source: string) {
		this.source = source;
	}

	public async loadSpec(): Promise<OpenAPISpec> {
		if (this.isUrl(this.source)) {
			return this.loadFromUrl(this.source);
		} else {
			throw new Error("Invalid URL provided. Please provide a valid URL.");
		}
	}

	private isUrl(source: string): boolean {
		return source.startsWith("http://") || source.startsWith("https://");
	}

	private async loadFromUrl(url: string): Promise<OpenAPISpec> {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch OpenAPI spec from URL: ${url}`);
		}
		const contentType = response.headers.get("content-type");
		const text = await response.text();

		if (contentType?.includes("application/json")) {
			return JSON.parse(text);
		} else if (
			contentType?.includes("application/x-yaml") ||
			contentType?.includes("text/yaml")
		) {
			return yaml.load(text) as OpenAPISpec;
		} else {
			throw new Error(
				"Unsupported content type. Please provide a valid JSON or YAML URL.",
			);
		}
	}
}

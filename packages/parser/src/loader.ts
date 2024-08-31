import { readFileSync } from "fs";
import { extname } from "path";
import * as yaml from "js-yaml";

export class OpenApiLoader {
	private static instance: OpenApiLoader;
	private source: string;

	private constructor(source: string) {
		this.source = source;
	}

	public static getInstance(source: string): OpenApiLoader {
		if (!this.instance || this.instance.source !== source) {
			this.instance = new this(source);
		}
		return this.instance;
	}

	public async loadSpec(): Promise<any> {
		if (this.isUrl(this.source)) {
			return this.loadFromUrl(this.source);
		} else {
			return this.loadFromFile(this.source);
		}
	}

	private isUrl(source: string): boolean {
		return source.startsWith("http://") || source.startsWith("https://");
	}

	private async loadFromUrl(url: string): Promise<any> {
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
			return yaml.load(text);
		} else {
			throw new Error(
				"Unsupported content type. Please provide a valid JSON or YAML URL.",
			);
		}
	}

	private loadFromFile(filePath: string): any {
		const fileExtension = extname(filePath);
		const fileContent = readFileSync(filePath, "utf-8");

		if (fileExtension === ".yaml" || fileExtension === ".yml") {
			return yaml.load(fileContent);
		} else if (fileExtension === ".json") {
			return JSON.parse(fileContent);
		} else {
			throw new Error(
				"Unsupported file format. Please provide a .json, .yaml, or .yml file.",
			);
		}
	}
}

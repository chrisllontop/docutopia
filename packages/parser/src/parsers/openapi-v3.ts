import type {DocutopiaParserOutput} from "@/types/output";
import {BaseParser} from "@/parsers/base";

export class OpenAPIParserV3 extends BaseParser {
	private groups: Array<any> = [];

	public parse(): DocutopiaParserOutput {
		this.groups = this.parseGroups();

		return {
			info: this.parseInfo(),
			servers: this.parseServers(),
			groups: this.groups,
			schemas: this.parseSchemas(),
			sidebar: this.generateSidebar(this.groups),
		};
	}

	private parseInfo() {
		return this.spec.info;
	}

	private parseServers() {
		return this.spec.servers;
	}

	private parseGroups() {
		const groupsMap: { [key: string]: any } = {};

		for (const path in this.spec.paths) {
			for (const method in this.spec.paths[path]) {
				const operation = this.spec.paths[path][method];
				const group = operation.tags?.[0] || "Default Group";
				const summary = operation.summary || "";
				const description = operation.description || "";

				if (!groupsMap[group]) {
					groupsMap[group] = {
						group,
						description: group,
						endpoints: [],
					};
				}

				const endpoint = {
					path,
					method: method.toUpperCase(),
					summary,
					description,
					parameters: operation.parameters || [],
					requestBody: this.replaceRefs(operation.requestBody || null),
					responses: this.replaceRefs(operation.responses || {}),
				};

				groupsMap[group].endpoints.push(endpoint);
			}
		}

		return Object.values(groupsMap);
	}

	private generateSidebar(groups: Array<any>) {
		return groups.map((group) => ({
			group: group.group,
			description: group.description,
			endpoints: group.endpoints.map((endpoint: any) => ({
				method: endpoint.method,
				description: endpoint.summary,
				path: `#${endpoint.method.toLowerCase()}-${endpoint.path.replace(/\//g, "-")}`,
			})),
		}));
	}

	private parseSchemas() {
		return this.spec.components?.schemas || {};
	}
}

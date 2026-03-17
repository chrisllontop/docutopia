// Main component export

export { App } from "./app";
export { AuthProvider, useAuth } from "./contexts/auth-context";
// Context exports
export {
	OpenAPIProvider,
	useOpenAPI,
} from "./contexts/openapi-context";
export {
	RequestParamsProvider,
	useRequestParams,
} from "./contexts/request-params-context";
export {
	SidebarStateProvider,
	useSidebarState,
} from "./contexts/sidebar-state-context";
export type {
	AuthContextValue,
	OpenAPIContextValue,
	RequestParamsContextValue,
} from "./contexts/types";
// Type exports
export type { OpenApiDocument } from "./core/types";
export type { DocutopiaProps } from "./docutopia";
export { Docutopia } from "./docutopia";

// Routing adapter exports
export { ReactRouterAdapter } from "./routing/adapters/react-router";
export { RoutingProvider, useRouting } from "./routing/context";
export type { LinkProps, RouteProps, RoutingAdapter } from "./routing/types";

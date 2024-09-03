# Docutopia

## Overview

Docutopia is a powerful monorepo designed to simplify and customize API documentation. It consists of two primary packages:

- `@docutopia/parser`: A utility that simplifies OpenAPI specifications, making them more accessible for generating UI documentation.
- `@docutopia/ui`: A customizable web component for rendering API documentation based on the output of `@docutopia/parser`.

Together, these packages provide a seamless and flexible solution for creating highly customized API documentation.

## Packages

### `@docutopia/parser`

Responsible for transforming complex OpenAPI specs (in JSON or YAML format) into a simplified structure that can be easily used to generate custom UI components.

#### Key Features:
- Converts OpenAPI specs into a simpler format.
- Supports both JSON and YAML formats.
- Works programmatically or via CLI.
- Compatible with OpenAPI 3.x.

For more details, see the [`@docutopia/parser`](packages/parser/README.md).

### `@docutopia/ui`

Web component that renders API documentation using the simplified output from `@docutopia/parser`. It allows for high levels of customization through the use of slots and additional attributes.

#### Key Features:
- Fully customizable API documentation UI.
- Easy integration as a web component.
- Supports OpenAPI 3.x specifications.

For more details, see the [`@docutopia/ui`](packages/ui/README.md).

## Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for more information on how to get started.

## License

Docutopia is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

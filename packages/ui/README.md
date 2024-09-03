

# Docutopia UI

## Overview
Docutopia UI is a customizable web component designed to render API documentation from OpenAPI specifications. It offers a high level of customization, allowing you to tailor the user interface to your specific needs.

## Key Features
- **High Customization:** Customize every aspect of your API documentation using slots for a unique and branded experience.
- **Web Component:** Easily integrate Docutopia UI into any web application as a web component.
- **Compatible with OpenAPI 3.x:** Supports the latest OpenAPI standards for comprehensive API documentation.

## Usage

### Basic usage

To use Docutopia UI, you need to install the package from npm:

```bash
npm install @docutopia/ui
```

Once installed, you can use the `@docutopia/ui` component in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Docutopia UI Example</title>
</head>
<body>
  <docutopia spec="https://example.com/openapi.yaml"></docutopia>
</body>
</html>
```

### Customization

Docutopia UI allows you to customize various parts of the documentation by using slots. For example, you can customize how each endpoint is displayed in the sidebar like this:

```html
<docutopia spec="https://example.com/openapi.yaml">
  <template slot="sidebarItem">
    <!-- Personalization of an endpoint -->
    <li class="sidebar-endpoint-item">
      <a href="{{path}}">
        <span class="method">{{method}}</span> - {{description}}
      </a>
    </li>
  </template>
</docutopia>
```

In this example, `path`, `method`, and `description` are tags that correspond to the properties from the output of `@docutopia/parser`. This output simplifies the OpenAPI specification into a format that is easier to use for customizing your UI.

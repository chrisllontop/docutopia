# Docutopia Parser

## Overview

Docutopia Parser simplifies OpenAPI files, making them easier to use for generating UI documentation. It converts complex JSON or YAML specs into a more accessible format, laying the groundwork for `@docutopia/core`.

## Key Benefits

- Converts complex OpenAPI specs into a simpler format for UI generation.
- Use it programmatically or via CLI to process specs.
- Handles JSON and YAML formats, from local files or URLs.
- Currently, supports OpenAPI 3.x

## How to Use

### Installation

You can install and use the parser via npm:

```bash
npm install @docutopia/parser
```

Alternatively, you can run it directly with npx:

```bash
npx docutopia parse --file /path/to/openapi.yaml --output /path/to/output.json
```

### Programmatic Usage

```javascript
import { DocutopiaParser } from '@docutopia/parser';

async function main() {
  const result = await DocutopiaParser.parse('https://example.com/openapi.yaml');
  console.log(result);
}

main();
```


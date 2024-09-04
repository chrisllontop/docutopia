import {SpecLoader} from "@/core/loader";
import {ParserFactory} from "@/core/parser";
import type {DocutopiaParserOutput} from "@/types/output";

export class DocutopiaParser {
  public static async parse(source: string): Promise<DocutopiaParserOutput> {
    const spec = await SpecLoader.load(source);
    const parser = ParserFactory.createParser(spec);
    return parser.parse();
  }
}

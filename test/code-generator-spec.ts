import { SiclCodeGenerator } from "../src/ts_bits/code_generator";
import { SiclParser } from "../src/ts_bits/sicl";
import * as chai from "chai";

const expect = chai.expect

function makeTmpl(expr: string) { return `Module Foo { ${expr}; }` }

describe("code generator", () => {
    const src = makeTmpl("term main: #I");
    let parser = new SiclParser().makeParser();
    const src_ast = parser.parse(src);
    let generator = new SiclCodeGenerator(src_ast.src);

    it("should not be null", () => {
        expect(generator).to.not.be.null;
    });

    it("should have a main fn", () => {
        expect(generator.generate_main()).to.not.be.empty;
    })
})

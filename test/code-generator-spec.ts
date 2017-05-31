import { SiclCodeGenerator } from "../src/code_generator";
import { SiclParser } from "../src/sicl";
import * as chai from "chai";

const expect = chai.expect

function makeTmpl(expr: string) { return `Module Foo { ${expr}; }` }

describe.only("code generator", () => {
    const src = makeTmpl("term main: #I");
    let parser = new SiclParser().makeParser();
    const src_ast = parser.parse(src);
    let generator = new SiclCodeGenerator(src_ast.src);

    it("should not be null", () => {
        expect(generator).to.not.be.null;
    });

    it("should have a main fn", () => {
        console.log(generator.generate_main());
        expect(generator.generate_main()).to.not.be.empty;
    })
})

import { SiclParser } from "../src/ts_bits/sicl";
import * as chai from "chai";

const expect = chai.expect;

function makeTmpl(expr: string) { return `Module Foo { ${expr}; }` }

describe("module_parser", () => {
    let parser = new SiclParser();
    let subject = parser.makeParser();
    let expr;

    beforeEach(() => {
        expr = "";
    })

    it("should lex a main term", () => {
        let expr = makeTmpl("term main: #I");
        expect(subject.parse(expr)).to.not.be.empty;
    });

    it("should parse and return a valid ast for main term with 1 comb", () => {
        expr = makeTmpl("term main: #I");
        const parsed_content = subject.parse(expr);
        expect(parsed_content).to.not.be.empty;
        expect(parsed_content.src.main_term).to.not.be.empty;
        expect(parsed_content.src.main_term.seq.length).to.equal(1);
    })

})

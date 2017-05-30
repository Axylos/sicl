import { SiclParser } from "../src/sicl";
import * as chai from "chai";

const expect = chai.expect

function makeTmpl(expr: string) { return `fn main() { ${expr}; }` }

describe("parser", () => {
    let parser = new SiclParser();
    it('should generate a parser', () => {
        expect(1).to.equal(1);
        expect(parser.makeParser()).to.not.be.empty;
    })

    describe("basic tokens", () => {
        const subject = parser.makeParser();

        it("should match a fn signature", () => {
            expect(subject.parse("fn foo ( ) { }")).to.not.be.empty;
            expect(subject.parse("fn foo () {}")).to.not.be.empty;
            expect(subject.parse("fn foo(){}")).to.not.be.empty;
            expect(subject.parse("fn foo(){     }")).to.not.be.empty;
        });

        it("should accept spaces at beginning and end of src", () => {
            expect(subject.parse(" fn foo () {}   ")).to.not.be.empty;
        })

        it("should accept an arg to a fn", () => {
            expect(subject.parse("fn foo (a) {  }")).to.not.be.empty;
        });

        it("should accept multiple args", () => {
            expect(subject.parse("fn foo(a, b, c) { } ")).to.not.be.empty;
        })
    })

    describe("basic types", () => {
        const subject = parser.makeParser();
        it("should parse a number", () => {
            expect(subject.parse("fn foo(a, b) { 3;}")).to.not.be.empty;
        })
    })

    describe("combinators", () => {
        const subject = parser.makeParser();

        it("should recognize the I combinator", () => {
            const expr = "#I";
            const tmpl = makeTmpl(expr);
            expect(subject.parse(tmpl)).to.not.be.empty;
        })
    });

    describe("parsing exprs", () => {
        const subject = parser.makeParser();
        const expr = makeTmpl("#I");
        const parsed_stuff = subject.parse(expr).src;
        console.log(parsed_stuff);

        it("should have a program key", () => {
            expect(parsed_stuff.program).to.not.be.empty;
        });

        it("should have a main fnc", () => {
            expect(parsed_stuff.main).to.not.be.empty;
        });

        it("should have a man fnc args list", () => {
            expect(parsed_stuff.main.args.length).to.equal(0);
        });

        describe("body", () => {
            it("should be an object", () => {
                expect(parsed_stuff.main.body.length).to.not.be.empty;
            });
        });
    })
})

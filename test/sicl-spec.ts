import { SiclParser } from "../src/sicl";
import * as chai from "chai";

const expect = chai.expect;

describe("parser", () => {
    let parser = new SiclParser();
    it('should generate a parser', () => {
        expect(1).to.equal(1);
        expect(parser.makeParser()).to.not.be.empty;
    })

    describe("basic tokens", () => {
        const subject = parser.makeParser();
        xit("should match fn", () => {
            expect(subject.parse("fn")).to.not.be.empty;
        });

        it("should match a fn signature", () => {
            expect(subject.parse("fn foo ( ) { }")).to.not.be.empty;
            expect(subject.parse("fn foo () {}")).to.not.be.empty;
            expect(subject.parse("fn foo(){}")).to.not.be.empty;
        })
    })
})

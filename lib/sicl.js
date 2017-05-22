"use strict";
exports.__esModule = true;
var peg = require("pegjs");
var template = "\n\nstart\n  = __ program:Program __ { return program; }\n\n  Program\n    = Function\n\n  __ = (WhiteSpace / LineTerminatorSequence / Comment)*\n\n  _ = (WhiteSpace / MultiLineCommentNoLineTerminator)*\n\n  WhiteSpace \"whitespace\"\n    = \"\t\"\n    / \"\v\"\n    / \"\f\"\n    / \" \"\n    / \"\u00A0\"\n    / \"\uFEFF\"\n    / Zs\n\n  LineTerminator\n    = [\n\r\u2028\u2029]\n\n  LineTerminatorSequence \"end of line\"\n       = \"\n\"\n       / \"\r\n\"\n       / \"\r\"\n       / \"\u2028\"\n       / \"\u2029\"\n\n  Comment \"comment\"\n    = MultiLineComment\n    / SingleLineComment\n\n  MultiLineComment\n    = \"/*\" (!\"*/\" SourceCharacter)* \"*/\"\n\n  MultiLineCommentNoLineTerminator\n    = \"/*\" (!(\"*/\" / LineTerminator) SourceCharacter)* \"*/\"\n\n  SingleLineComment\n    = \"//\" (!LineTerminator SourceCharacter)*\n\n  Function\n    = fn ws Name ws LParenToken ws? ArgList ws? RparenToken ws FnBody\n\n  FnBody\n    = LBraceToken ws? Expr ws? RBraceToken\n\n  Expr \n    = .\n\n\n\n  LParenToken = \"(\"\n  RParenToken = \")\"\n  LBraceToken = \"{\"\n  RBraceToken = \"}\"\n  \n  FnToken = \"fn\"\n\n";
var SiclParser = (function () {
    function SiclParser() {
    }
    SiclParser.prototype.makeParser = function () {
        var parser = peg.generate(template);
        return parser;
    };
    return SiclParser;
}());
exports.SiclParser = SiclParser;

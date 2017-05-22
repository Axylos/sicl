import peg = require("pegjs");

const template2 = `
start
  = __ program:Program __ { return program; }

  Program
    = Function

  __ = (WhiteSpace / LineTerminatorSequence / Comment)*

  _ = (WhiteSpace / MultiLineCommentNoLineTerminator)*

  WhiteSpace "whitespace"
    = "\t"
    / "\v"
    / "\f"
    / " "
    / "\u00A0"
    / "\uFEFF"
    / Zs



  LineTerminator
    = [\n\r\u2028\u2029]

  LineTerminatorSequence "end of line"
       = "\n"
       / "\r\n"
       / "\r"
       / "\u2028"
       / "\u2029"

  Comment "comment"
    = MultiLineComment
    / SingleLineComment

  MultiLineComment
    = "/*" (!"*/" SourceCharacter)* "*/"

  MultiLineCommentNoLineTerminator
    = "/*" (!("*/" / LineTerminator) SourceCharacter)* "*/"

  SingleLineComment
    = "//" (!LineTerminator SourceCharacter)*

  Function
    = fn ws Name ws LParenToken ws? ArgList ws? RparenToken ws FnBody

  FnBody
    = LBraceToken ws? Expr ws? RBraceToken

  Expr 
    = .



  LParenToken = "("
  RParenToken = ")"
  LBraceToken = "{"
  RBraceToken = "}"
  
  FnToken = "fn"

`;

const template = `
  Start
    = Program

  Program
    = Function

  Function
    = FnToken _ Name _? Args _? FnBody

  
  _ 
  = "\t"
    / "\v"
    / "\f"
    / " "
    / "\u00A0"
    / "\uFEFF"

  
  Name
    = [a-zA-z]+

  Args
    = LParenToken _? RParenToken

  FnBody
    = LBraceToken _? RBraceToken

  //Tokens

  FnToken
    = "fn"
   
  LParenToken = "("
  RParenToken = ")"

  LBraceToken = "{"
  RBraceToken = "}"
`
export class SiclParser {
    public makeParser() {
        const parser = peg.generate(template);
        return parser;
    }

    constructor() {

    }
}

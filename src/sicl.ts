import peg = require("pegjs");

const template = `
  Start
    = __? Program __?

  Program
    = Function

  CombExpr
    = Combinator

  Combinator
    = "#" Name

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
    = LParenToken _? ArgList? _? RParenToken

  ArgList
    = Arg "," _? ArgList
    / Arg
    _?

  Arg
    = Name

  __
  = _*

  FnBody
    = LBraceToken __? Expr __? RBraceToken

  Expr
    = TypeLiteral SemiToken
    / CombExpr SemiToken
    / __?


  // Types

  TypeLiteral
    = IntLiteral

  // Literals

  IntLiteral = [0-9]+

  //Tokens

  FnToken
    = "fn"

  SemiToken = ";"
   
  LParenToken = "("
  RParenToken = ")"

  LBraceToken = "{"
  RBraceToken = "}"
`;
export class SiclParser {
    public makeParser() {
        const parser = peg.generate(template);
        return parser;
    }
}

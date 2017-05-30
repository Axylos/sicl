import peg = require("pegjs");

const template = `
{
  let functions = {};
  let main = null;
}
  Start
    = __? program:Program __? { return { src: {program, main } }; }

  Program
    = func:Function { if (func.name === "main") { main = func; } return func }

  CombExpr
    = Combinator

  Combinator
    = "#" name:Name { return { op: "eval", ident: name }}

  Function
    = FnToken _ name:Name _? args:Args _? body:FnBody { return {name, args, body}; }
  _
  = "\t"
    / "\v"
    / "\f"
    / " "
    / "\u00A0"
    / "\uFEFF"

  Name
    = str:[a-zA-z]+ { return str.join(""); }

  Args
    = LParenToken _? args:ArgList? _? RParenToken { return args || []; }

  ArgList
    = Arg "," _? list:ArgList { return list; }
    / Arg
    _?

  Arg
    = Name
  __
  = _*

  FnBody
    = LBraceToken __? exprList:ExprList __? RBraceToken { return exprList.reverse(); }

  ExprList
    = expr:Expr __? SemiToken __? list:ExprList { return list.concat(expr); }
    / Expr SemiToken
    / __?

  Expr
    = literal:TypeLiteral  { return literal; }
    / comb:CombExpr  { return comb; }
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

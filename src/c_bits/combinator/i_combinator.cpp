#include "i_combinator.hpp"
#include "term.hpp"
void ICombinator::apply (Term* term) { internal_member = term; };
Term* ICombinator::eval() { return internal_member; };

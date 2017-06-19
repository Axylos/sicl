#include "term.hpp"
#include "combinator.hpp"
class ICombinator : public Combinator {
public:
  Term* internal_member;
  void apply(Term* terms);
  Term* eval(void);
};

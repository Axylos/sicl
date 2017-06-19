#include "term.hpp"
class CombTerm : public Term {
public:
  virtual void apply(Term) = 0;
};

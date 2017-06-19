#include "term.hpp"
class Combinator : public Term {
public:
  virtual void apply(Term* term) = 0;
};

struct Foo {
  int size;
  char* name;
};

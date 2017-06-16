#pragma once
#include "combinator.hpp"

//class for Identity Combinator
class ICombinator : public Combinator {
private:
  Atom input_term;

public:
  void apply_term(Atom term);
  
};

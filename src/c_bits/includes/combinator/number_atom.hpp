#include "atom.hpp"

class NumberAtom : public Atom {
public:
  NumberAtom(long n) { data_member = n; }
  
};

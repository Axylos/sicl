#include "term.hpp"

class Atom : public Term {
protected:
  long data_member;
public:
  long unwrap() { return data_member; }
  Term* eval(void) { return this;}
};

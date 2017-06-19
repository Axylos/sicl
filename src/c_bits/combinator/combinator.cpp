#include <iostream>
#include "combinator.hpp"

int Combinator::foo(void) { return 4; }
int Combinator::get_me_out_of_here(int a) { return a; }
int Combinator::bar(int a) { std::cout << "hey there"; return 0; }

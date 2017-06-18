#include <iostream>
#include "combinator.hpp"
using std::cout;
using std::endl;


int main(void) {

  Combinator* foo = new Combinator();


  int a = foo->get_me_out_of_here(4);

  cout << a << endl;


  

  cout << "hey there" << endl;

  return 0;
}

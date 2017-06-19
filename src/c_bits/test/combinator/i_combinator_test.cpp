#include "gtest/gtest.h"
#include "i_combinator.hpp"
#include "number_atom.hpp"

#include <iostream>
using std::cout;

namespace {
  class ICombTest : public ::testing::Test {

  };
}

TEST_F(ICombTest, Exists) {
  NumberAtom atom = NumberAtom(5);
  long result = atom.unwrap();
  EXPECT_TRUE(result == 5);
}

TEST_F(ICombTest, Apply) {
  NumberAtom atom = NumberAtom(6);

  ICombinator i = ICombinator();
  i.apply(&atom);

  NumberAtom* result = (NumberAtom*)(i.eval());

  EXPECT_TRUE(result->unwrap() == atom.unwrap());
}

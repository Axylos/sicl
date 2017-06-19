#include "gtest/gtest.h"
#include "combinator.hpp"

namespace {
  class CombTest : public ::testing::Test {
  protected:
    virtual void SetUp() {
      Combinator d = Combinator();
    }

  };
}


  TEST_F(CombTest, Wat) {
    Combinator d = Combinator();
    int a = d.foo();


  }

/*
int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);


   return RUN_ALL_TESTS();
}

*/

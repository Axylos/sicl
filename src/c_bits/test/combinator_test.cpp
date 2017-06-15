#include "gtest/gtest.h"
#include "combinator.hpp"

namespace {
  class CombTest : public ::testing::Test {
  protected:
    virtual void SetUp() {
      Combinator d = Combinator();
    }

  };

    TEST_F(CombTest, Evals) {
        Combinator c = Combinator();

        EXPECT_EQ(1, 1);
        EXPECT_TRUE(c.eval());
    }

    TEST_F(CombTest, Shapes) {
        Shape s;
    }
}

#include "gtest/gtest.h"
#include "combinator.hpp"

namespace {
    class CombTest : public ::testing::Test {

    };

    TEST_F(CombTest, Evals) {
        Combinator c = Combinator();

        EXPECT_EQ(1, 1);
    }
}

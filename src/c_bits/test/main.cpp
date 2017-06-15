#include "gtest/gtest.h"

namespace {
    class FooTest : public ::testing::Test {

    };

    TEST_F(FooTest, MethodABSDOESFOO) {
        const char* f = "foo";
        EXPECT_EQ(1, 1);
    };
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);

    return RUN_ALL_TESTS();
}

cmake_minimum_required (VERSION 3.7.2)
project (Sicl)

set (SRC_DIR ${SRC_DIR} src/c_bits)
set (INC_DIR ${INC_DIR} src/c_bits/includes)

configure_file(
  "${INC_DIR}/SiclConfig.h.in"
  "${PROJECT_BINARY_DIR}/SiclConfig.h"
  )

include_directories("${SRC_DIR}")
include_directories("${INC_DIR}")

include_directories("${SRC_DIR}/combinator")
include_directories("${INC_DIR}/combinator")
#add_subdirectory(${SRC_DIR}/combinator)
#add_subdirectory(${INC_DIR}/combinator)

enable_testing()
#Gtest stuff
# Download and unpack googletest at configure time
configure_file(CMakeLists.txt.in googletest-download/CMakeLists.txt)
execute_process(COMMAND ${CMAKE_COMMAND} -G "${CMAKE_GENERATOR}" .
  RESULT_VARIABLE result
  WORKING_DIRECTORY ${CMAKE_BINARY_DIR}/googletest-download )
if(result)
  message(FATAL_ERROR "CMake step for googletest failed: ${result}")
endif()
execute_process(COMMAND ${CMAKE_COMMAND} --build .
  RESULT_VARIABLE result
  WORKING_DIRECTORY ${CMAKE_BINARY_DIR}/googletest-download )
if(result)
  message(FATAL_ERROR "Build step for googletest failed: ${result}")
endif()

# Prevent overriding the parent project's compiler/linker
# settings on Windows
set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

# Add googletest directly to our build. This defines
# the gtest and gtest_main targets.
add_subdirectory(${CMAKE_BINARY_DIR}/googletest-src
                 ${CMAKE_BINARY_DIR}/googletest-build)

# The gtest/gtest_main targets carry header search path
# dependencies automatically when using CMake 2.8.11 or
# later. Otherwise we have to add them here ourselves.
if (CMAKE_VERSION VERSION_LESS 2.8.11)
  include_directories("${gtest_SOURCE_DIR}/include")
endif()

set (TEST_DIR ${TEST_DIr} ${SRC_DIR}/test)
include_directories(${TEST_DIR})

include_directories(${TEST_DIR}/combinator)
add_executable(combinator_test ${TEST_DIR}/combinator/main.cpp ${TEST_DIR}/combinator/combinator_test.cpp)
target_link_libraries(combinator_test Combinator gtest)

add_test(Name combinator_test COMMAND combinator_test)
#add_executable(combinator_test ${TEST_DIR}/combinator_test.cpp)
#target_link_libraries(combinator_test gtest)
#add_executable(test_runner ${TEST_DIR}/main.cpp)

add_custom_target(check COMMAND ${CMAKE_CTEST_COMMAND} --verbose)


#add_test(NAME test_runner COMMAND test_runner)

File(GLOB COMBINATOR_SRC "${SRC_DIR}/combinator/*.cpp")
add_library(Combinator ${COMBINATOR_SRC})
add_executable(zicl ${SRC_DIR}/main.cpp)
target_link_libraries (zicl Combinator)



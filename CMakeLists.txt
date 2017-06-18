cmake_minimum_required (VERSION 2.6)
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
add_subdirectory(${SRC_DIR}/combinator)
add_subdirectory(${INC_DIR}/combinator)

file(GLOB COMBINATOR_SRC "${SRC_DIR}/combinator/*.cpp")
add_library(Combinator ${COMBINATOR_SRC})
add_executable(Sicl ${SRC_DIR}/main.cpp)
target_link_libraries (Sicl Combinator)



CMPLDIR=compiler
LIBDIR=lib
INCDIR=include
ODIR=obj
CC=clang++
GTESTDIR=googletest/googletest
TSTDIR=test

_MFILZ=$(wildcard $(CMPLDIR)/*.cpp)
install: $(_MFILZ) $(ODIR)/lib.a
	$(CC) $(_MFILZ) $(ODIR)/lib.a -I combinator/includes -o $(ODIR)/compiler
	echo "installed"

run:
	./$(ODIR)/compiler

$(ODIR)/lib.a: $(ODIR)/combinator.o $(ODIR)/context.o
	ar -rv $@ $^

_CMBFILZ=$(wildcard combinator/*.cpp)
$(ODIR)/combinator.o: $(_CMBFILZ)
	$(CC) -c $< -I combinator/includes -o $@

_CTXFILZ=$(wildcard context/*.cpp)
$(ODIR)/context.o:
	$(CC) -c $(_CTXFILZ) -I context/includes/ -o $@ 

_TSTFILZ=$(wildcard $(TSTDIR)/*.cpp)

.PHONY: test
test: $(TSTDIR)/libgtest.a $(ODIR)/lib.a $(_TSTFILZ)
	$(CC) -isystem $(GTESTDIR)/include -pthread $^\
		-I combinator/includes -o $(TSTDIR)/test_runner
	./test/test_runner

clean_test:
	rm -rf $(TSTDIR)/test_runner

$(TSTDIR)/tst_cases.o: $(ODIR)/lib.a $(_TSTFILZ)
	echo $^
	$(CC)  -o $@ $^ -I combinator/includes -I $(GTESTDIR)/include 

$(TSTDIR)/gtest-all.o:
	$(CC) -isystem $(GTESTDIR)/include -I$(GTESTDIR) \
		-pthread -c $(GTESTDIR)/src/gtest-all.cc -o $@

$(TSTDIR)/libgtest.a: $(TSTDIR)/gtest-all.o
	ar -rv $@ $<

clean:
	rm -rf $(ODIR)/*
	rm -rf $(TSTDIR)/tst_cases.o



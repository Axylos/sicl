CMPLDIR=compiler
LIBDIR=lib
INCDIR=include
ODIR=obj
CC=clang++

install: $(_MFILZ) lib.o
	$(CC) $(_MFILZ) -o $(ODIR)/compiler
	echo "installed"

run:
	./$(ODIR)/compiler
lib.o:


_MFILZ=$(wildcard $(CMPLDIR)/*.cpp)
main.o:
	clang++ -a $(_MFILZ) -o $@

clean:
	rm -rf $(ODIR)/*



#ifndef COMBINATORHPP
#define COMBINATORHPP


class Shape {
    public:
        int size;
};

class Square : public Shape {
    public:
        int foo;
};

class Triangle : public Shape {
    public:
        int bar;
};


class Combinator {
    private:
        int args[10];
    public:
        bool eval();
        Shape get_shape();
        int getShapeSize(Shape shape);
};

#endif

export interface IFoo {
    foo: number;
}

export class Greeter {
    private greeting: string;

    private baz() {
        return this.bar();
    }

    public foo: IFoo;

    constructor(message: string) {
        this.greeting = message;
    }

    public bar() {
        return this.greet();
    }



    public greet() {
        return "Bonjour, " + this.greeting + "!";
    }
}

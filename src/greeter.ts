export interface IFoo {
    foo: number;
}

export class Greeter {
    public foo: IFoo;

    private greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    public bar() {
        return this.greet();
    }

    public greet() {
        return "Bonjour, " + this.greeting + "!";
    }

    private baz() {
        return this.bar();
    }
}

export interface IModule {
    name: string;
    exprs: object;
}

export interface IMainTerm {
    name: string;
    seq: Array<any>;
}

export interface IAst {
    term_module: IModule;
    main_term: IMainTerm;
}

export class SiclCodeGenerator {
    public ast: IAst;
    public generated_code: any = null;

    constructor(ast: IAst) {
        this.ast = ast;
    }

    public generate_c_code() {
        this.generated_code = this.makeCode();
    }

    private makeCode() {
        return this.generate_main();
    }

    public generate_main() {
        const main_src = this.ast.main_term.seq;
        console.log(main_src[0])
        let exprs = main_src[0];
        let main_tmpl = `
            #include <stdio.h>;
            int main(int argc, char* argv[]) {
                printf("${exprs}");
                return 0;

            }
        `
        return main_tmpl;
    }
}

export interface CreateTableUseCase{
    execute: ( options: CreateTableOptions ) => string | undefined;
}

export interface CreateTableOptions{
    base: number;
    limit?: number;
}


export class CreateTable  implements CreateTableUseCase {

    constructor(
        //TODO: Dependency Injection 
    ){}

    execute({base, limit=10}: CreateTableOptions) {
        let outputTableRow : string = '';
        for (let i = 1; i <= limit; i++) {
            
           outputTableRow += `${base} x ${i} = ${base * i}\n`;
        }
        return outputTableRow;
    }
 


}


import v4 from "uuid";
export interface BankAccountProperties {
    id: string;
    balance: number;
    cardId: string;
    customerId: string;
}

export class BankAccount {
    properties: BankAccountProperties;
    constructor(properties: BankAccountProperties) {
        this.properties = properties;
    }
    static create(properties: {
        balance: number;
        cardId: string;
        customerId: string;
    }){
    return new BankAccount({
    ...properties,
    id: v4(),
})
}
}
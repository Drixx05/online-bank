import v4 from "uuid";
export interface CardProperties {
    id: string;
    category: string;
    pan: number;
    expirationDate: number;
    cvv: number;
    owner: string;
    bankAccountId: string;
}

export class Card {
    properties: CardProperties;
    constructor(properties: CardProperties) {
        this.properties = properties;
    }
    static create(properties: {
        category: string;
        pan : number;
        expirationDate: number;
        cvv: number;
        owner: string;
        bankAccountId: string;
    }) {
        return new Card({
            ...properties,
            id: v4,
        })
    }
}
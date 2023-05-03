import {v4} from "uuid";
export interface CustomerProperties {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class Customer {
    properties : CustomerProperties;
    constructor(properties: CustomerProperties) {
        this.properties = properties;
    }
    static create (properties: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) {
        return new Customer({
            id: v4(),
                ...properties,
        })
    }
}

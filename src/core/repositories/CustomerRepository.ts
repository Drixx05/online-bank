import {Customer} from "../entities/Customer";

export interface CustomerRepository {
    save(customer: Customer): Promise<Customer>;
    getById(id: string): Promise<Customer>;
    getByEmail(email: string): Promise<Customer>;
}
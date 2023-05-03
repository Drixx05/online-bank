import {Customer} from "../../../entities/Customer";
import {CustomerRepository} from "../../../repositories/CustomerRepository";

export class InMemoryCustomerRepository implements CustomerRepository{
    customerList: Customer[] = [];

    async save(customer: Customer): Promise<Customer>{
        this.customerList.push(customer);
        return customer;
    }
    async getById(id: string): Promise<Customer> {
        const customerId = this.customerList.find(customer => customer.properties.id === id);
        if (!customerId) {
            throw new Error("Customer not found");
        }
        return customerId;
    }

    async getByEmail(email: string): Promise<Customer> {
        const customer = this.customerList.find(user => customer.properties.email === email);
        if(!customer){
            throw new Error("Customer not found");
        }
        return customer;
    }
}
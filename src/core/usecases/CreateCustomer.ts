import {CustomerRepository} from "../repositories/CustomerRepository";
import {Customer} from "../entities/Customer";
import {BcryptPasswordGateway} from "../../adapters/gateways/BcryptPasswordGateway";

export interface CreateCustomerPayload {
    firstName : string;
    lastName: string;
    email: string;
    password: string;
}
export class CreateCustomer {
    customerRepository : CustomerRepository;
    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(payload: CreateCustomerPayload) : Promise<Customer> {
        const PasswordBcrypt = new BcryptPasswordGateway()
        const hashedPassword = await PasswordBcrypt.encrypt(payload.password)
        const customer = Customer.create({
            lastName : payload.lastName,
            firstName: payload.firstName,
            email: payload.email,
            password: hashedPassword,
        });
        await this.customerRepository.save(customer);
        return customer;
    }


}
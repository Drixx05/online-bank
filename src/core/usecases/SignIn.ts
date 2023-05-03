import {CustomerRepository} from "../repositories/CustomerRepository";
import {Customer} from "../entities/Customer";
import {BcryptPasswordGateway} from "../../adapters/gateways/BcryptPasswordGateway";
import {PasswordGateway} from "../gateways/PasswordGateway";

export interface SignInProperties {
    email: string;
    password: string;
}


export class SignIn {
    customerRepository: CustomerRepository;
    passwordGateway : PasswordGateway;

    constructor(
        passwordGateway: PasswordGateway,
        customerRepo: CustomerRepository
    ) {
        this.passwordGateway = passwordGateway;
        this.customerRepository = customerRepo;
    }

    async execute(payload: SignInProperties): Promise<Customer> {
        const customer = await this.customerRepository.getByEmail(payload.email);
        const passwordCheck = await this.passwordGateway.compare(payload.password, customer.properties.password);
        if (passwordCheck) {
            return customer;
        }
        throw new Error("Authentication failed");
    }
}
import {BankAccountRepository} from "../repositories/BankAccountRepository";
import {CustomerRepository} from "../repositories/CustomerRepository";
import {BankAccount} from "../entities/BankAccount";
import {CardRepository} from "../repositories/CardRepository";


export interface CreateBankAccountPayload {
        id: string;
}
export class CreateBankAccount {
    bankAccountRepository : BankAccountRepository;
    cardRepository: CardRepository;
    customerRepository: CustomerRepository;
    constructor(bankAccountRepository: BankAccountRepository, customerRepository: CustomerRepository, cardRepository: CardRepository) {
        this.bankAccountRepository = bankAccountRepository;
        this.customerRepository = customerRepository;
        this.cardRepository = cardRepository;
    }
    async execute(payload : CreateBankAccountPayload) {
        const customer = await this.customerRepository.getById(payload.id);
        const card = await this.cardRepository.getById(payload.id);
        const account = BankAccount.create({
            balance: 200,
            cardId : card.properties.id,
            customerId: customer.properties.id,
        })
        return this.bankAccountRepository.save(account)
    }
}
import {CardRepository} from "../repositories/CardRepository";
import {BankAccountRepository} from "../repositories/BankAccountRepository";
import {Card} from "../entities/Card";

export interface CreateCardPayload {
    id : string;
}
export class CreateCard {
    cardRepository : CardRepository;
    bankAccountRepository: BankAccountRepository;
    constructor(cardRepository: CardRepository, bankAccountRepository: BankAccountRepository) {
        this.cardRepository = cardRepository;
        this.bankAccountRepository = bankAccountRepository;
    }
    async execute(payload: CreateCardPayload) {
        const account = await this.bankAccountRepository.getById(payload.id);
        const card = Card.create({
            category: "premium",
            pan: 1424057894586325,
            expirationDate : 2028,
            cvv : 637,
            owner: "SpiderRobert",
            bankAccountId: account.properties.id,
        })
        return this.cardRepository.save(card)
    }
}
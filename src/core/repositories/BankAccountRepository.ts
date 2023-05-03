import {BankAccount} from "../entities/BankAccount";

export interface BankAccountRepository {
    save(bankAccount: BankAccount): Promise<BankAccount>;
    getById(id: string): Promise<BankAccount>;
}
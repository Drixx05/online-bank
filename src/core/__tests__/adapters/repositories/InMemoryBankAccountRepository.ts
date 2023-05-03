import {BankAccountRepository} from "../../../repositories/BankAccountRepository";
import {BankAccount} from "../../../entities/BankAccount";

export class InMemoryBankAccountRepository implements BankAccountRepository {
    accountList: BankAccount[] = [];

    async save(bankAccount: BankAccount): Promise<BankAccount> {
        this.accountList.push(bankAccount);
        return bankAccount;
    }
    async getById(id: string): Promise<BankAccount> {
        const accountId = this.accountList.find(account => account.properties.id === id);
        if (!accountId) {
            throw new Error("Account not found");
        }
        return accountId;
    }
}
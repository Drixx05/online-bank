import {CardRepository} from "../../../repositories/CardRepository";
import {Card} from "../../../entities/Card";

export class InMemoryCardRepository implements CardRepository {
    cardList: Card[] = [];

    async save(card: Card): Promise<Card> {
        this.cardList.push(card);
        return card;
    }
    async getById(id: string): Promise<Card> {
        const cardId = this.cardList.find(card => cardId.properties.id === id);
        if (!cardId) {
            throw new Error("Card not found");
        }
        return cardId;
    }

}
import {Card} from "../entities/Card";

export interface CardRepository {
    save(card: Card): Promise<Card>;
    getById(id: string): Promise<Card>;
}

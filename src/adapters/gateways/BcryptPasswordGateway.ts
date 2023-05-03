import * as bcrypt from "bcrypt";
import {PasswordGateway} from "../../core/gateways/PasswordGateway";

export class BcryptPasswordGateway implements PasswordGateway {
    compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash).then(function(result) {
            return result;
        });
    }

    encrypt(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds).then(function(hash) {
            return hash;
        });

    }
}
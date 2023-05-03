export interface PasswordGateway {
    encrypt (password: string): Promise<string>;
    compare(password: string, comparedPassword: string): Promise<boolean>;
}


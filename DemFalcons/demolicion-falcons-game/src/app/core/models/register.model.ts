export class RegisterModel {
    constructor(
        public username: string,
        public password: string,
        public resendPasword: string,
        public firstName: string,
        public lastName: string,
    ) { }
}

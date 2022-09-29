export class User {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    whereHearAboutUs: string;

    constructor(
        userName: string,
        email: string,
        password: string,
        confirmPassword: string,
        whereHearAboutUs: string
    ) {

        this.userName = userName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.whereHearAboutUs = whereHearAboutUs;
    }
}


//ussr name
// -email
// -password
// -confirm password
// -where you hear abou
class User {

    constructor(){

        this.email = "";
        this.password = "";

    }

    setEmail(email){

        this.email = email;

    }

    setPassword(password){

        this.password = password;
    }

    getEmail(){

        return this.email;

    }

    getPassword(){

        return this.password;
    }

}
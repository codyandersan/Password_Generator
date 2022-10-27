// console.log(strong.checked)
class Password {
    constructor() {
    this.password = ""
    this.funnyPasswords = [
        "123456",
        "password",
        "123456789",
        "12345",
        "12345678",
        "qwerty",
        "1234567",
        "111111",
        "1234567890",
        "123123",
        "abc123",
        "1234",
        "password1",
        "000000",
        "qwerty123",
        "dragon",
        "sunshine",
        "princess",
        "letmein",
        "654321",
        "monkey",
        "27653",
        "123321",
        "qwertyuiop",
        "superman",
        "incorrect"
        ]
    }
    generateStrongPassword(){
        // 48 to 122
        this.password = ""
        for (let i = 0; i < 8; i++) {
            this.password += String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1) + 48))
        }
        return this.password
    }

    generateSuperStrongPassword(){
        // 35 to 122
        this.password = ""
        for (let i = 0; i < 12; i++) {
            this.password += String.fromCharCode(Math.floor(Math.random() * (122 - 35 + 1) + 35))
        }
        return this.password
    }

    generateWeakPassword(){
        // 97 to 122
        this.password = ""
        for (let i = 0; i < 6; i++) {
            this.password += String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))
        }
        return this.password
    }

    generateFunnyPassword(){
        this.password = this.funnyPasswords[Math.floor(Math.random() * this.funnyPasswords.length)-1]
        return this.password
    }
}



const handleBtn = (e) => {
    let pass = new Password()
    e.preventDefault()
    if (strong.checked) {
        pass = pass.generateStrongPassword()
        }
    else if (superStrong.checked){
        pass = pass.generateSuperStrongPassword()
    }
    else if (weak.checked){
        pass = pass.generateWeakPassword()
    }
    else if (funny.checked){
        pass = pass.generateFunnyPassword()
    }
    else {
        alert("Select password strength first!")
    }
    document.getElementById("password").innerHTML = pass
}
const copyPassword = () => {
    navigator.clipboard.writeText(document.getElementById("password").innerHTML).then(()=> {
        alert("Your password has been copied to clipboard!")
        }, ()=> {
        alert("Your password could not be copied!")
        }
    )

}
create.addEventListener("click", handleBtn)
copyBtn.addEventListener("click", copyPassword)

// console.log(pass.generateStrongPassword())
// console.log(pass.generateSuperStrongPassword())
// console.log(pass.generateWeakPassword())
// console.log(pass.generateFunnyPassword())

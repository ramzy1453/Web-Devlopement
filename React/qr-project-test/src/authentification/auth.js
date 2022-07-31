export function isEmailValid(email, data) {
    return data.map(e => e.username).includes(email)
}

export function isPasswordValid(password, email, data) {
    const user = data.find(e => e.username === email)
    console.log(user)
    return user?.fname + user?.lname === password
}

export function giveThisMan(email, password, data) {
    return data.find(e => e.username === email && e.fname + e.lname === password);
}
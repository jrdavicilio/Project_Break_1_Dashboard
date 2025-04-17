const passwordGenerator = document.getElementById('passwordGenerator');
const passwordLength = document.getElementById('passwordLength');
const result = document.getElementById('result');

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";
const allCharacters = mayusculas + minusculas + numeros + simbolos;

function getRandomCharacter(string) {
    return string[Math.floor(Math.random() * string.length)];
}

function generatePassword(length) {
    if (length < 12) {
        length = 12;
    }
    else if (length > 50) {
        length = 50;
    }

    let password = [
        getRandomCharacter(mayusculas),
        getRandomCharacter(minusculas),
        getRandomCharacter(numeros),
        getRandomCharacter(simbolos)
    ];

    for (let i = password.length; i < length; i++) {
        password.push(getRandomCharacter(allCharacters));
    }

    password = password.sort(() => Math.random() - .5);

    return password.join('');
}

passwordGenerator.addEventListener('click', () => {
    const length = passwordLength.value;
    const newPassword = generatePassword(length);
    result.textContent = `${newPassword}`;
});

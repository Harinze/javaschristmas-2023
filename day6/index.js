const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

const generateSecretSantaPairs = (arr) => {

 const shuffledArr = [...arr].sort(() => Math.random() - 0.5);

    const secretSantaPairs = {};
    for (let i = 0; i < arr.length; i++) {
        const currentPerson = arr[i];
        const secretSanta = shuffledArr[(i + 1) % arr.length];

        if (currentPerson === secretSanta) {
            [shuffledArr[i], shuffledArr[(i + 1) % arr.length]] = [shuffledArr[(i + 1) % arr.length], shuffledArr[i]];
        }

        secretSantaPairs[currentPerson] = shuffledArr[(i + 1) % arr.length];
    }

    return secretSantaPairs;
    
}


document.getElementById('generateButton').addEventListener('click', function () {
    
    const secretSantaPairs = generateSecretSantaPairs(people);

    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    for (const person in secretSantaPairs) {
        const listItem = document.createElement('li');
        listItem.textContent = `${person} ➔ ${secretSantaPairs[person]}`;
        resultList.appendChild(listItem);
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove('hidden');
});




console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
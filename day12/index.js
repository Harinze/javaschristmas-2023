const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'laptop 💻', "scarf 🧣", 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/

const sortedAZ = (arrOfGifts) => {
    return xmasGifts.sort()
}

console.log('A-Z: ', sortedAZ(xmasGifts)) 

//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

const sortedZA = (arrOfGifts) => {
     return arrOfGifts.sort((a,b)=>b.localeCompare(a))
}
console.log('Z-A: ', sortedZA(xmasGifts)) 
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]
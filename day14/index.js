const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

const elfZone = document.getElementById("elf-hangout-zone")

btn.addEventListener("click", duplicateElf)

let elfCount = 1

function duplicateElf(){    
  if(elfCount == 10) return 
    
  const clonedElf = elf.cloneNode(true)
  elfCount += 1
  
  elfZone.appendChild(clonedElf)
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
// btn.addEventListener("click", sort)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    },
    {
        name: "Jade",
        hasBeenGood: false
    },
    {
        name: "Ibim",
        hasBeenGood: true
    },
    {
        name: "Loiloa",
        hasBeenGood: false
    },
    {
        name: "Unima",
        hasBeenGood: true
    }
]

btn.addEventListener("click", sortAndDisplay);

function sortAndDisplay() {
  niceList.innerHTML = "";
  naughtyList.innerHTML = "";

  const nicePeople = sorteesArr.filter(person => person.hasBeenGood);
  const naughtyPeople = sorteesArr.filter(person => !person.hasBeenGood);

  displayNames(nicePeople, niceList);
  displayNames(naughtyPeople, naughtyList);
}

function displayNames(people, listElement) {
  const fragment = document.createDocumentFragment();

  people.forEach(person => {
    const listItem = document.createElement("li");
    listItem.textContent = person.name;
    fragment.appendChild(listItem);
  });

  listElement.appendChild(fragment);
}

// Initial display on page load
//sortAndDisplay();

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
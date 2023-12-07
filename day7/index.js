// /** Challenge: 
//   - Iterate over the wishlist array.
//   - Dynamically render your wishlist from the array.
//   - Style the wishlist with CSS.
// **/

const wishlistContainer = document.getElementById("wishlist-container");
const wishlistForm = document.getElementById("wishlist-form");

const wishlist = [
    { name: "Work for Scrimba", description: "Dream job at Scrimba", link: "https://scrimba.com/dashboard#overview" },
    { name: "Become a Software Engineer", description: "Fulfill programming dreams", link: "https://scrimba.com/dashboard#overview" },
    { name: "Solve all the problems in the world with code!", description: "Ambitious goal", link: "https://www.freecodecamp.org/news/how-to-solve-coding-problems/" },
    { name: "Retire Early", description: "Financial freedom", link: "https://www.investopedia.com/terms/f/financial-independence-retire-early-fire.asp" },
    { name: "Live in Norway for 10 years", description: "Experience the beauty of Norway", link: "https://www.heartmybackpack.com/norway/move-to-norway/" },
    { name: "Build a successful Business", description: "Entrepreneurial journey", link: "https://www.investopedia.com/articles/pf/08/make-money-in-business.asp" },
];

function renderWishlist() {
    wishlistContainer.innerHTML = "";
    wishlist.forEach(item => {
        const wishlistItem = document.createElement("div");
        wishlistItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank">Buy Now</a>
            <button class="remove-item" data-name="${item.name}">Remove</button>
        `;
        wishlistItem.classList.add("wishlist-item");
        wishlistContainer.appendChild(wishlistItem);
    });

    // Add event listener for remove button
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
        button.addEventListener("click", handleRemoveItem);
    });
}

function handleRemoveItem(event) {
    const itemName = event.target.dataset.name;
    const index = wishlist.findIndex(item => item.name === itemName);
    if (index !== -1) {
        wishlist.splice(index, 1);
        renderWishlist();
    }
}

wishlistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const itemLink = document.getElementById("itemLink").value;

    if (itemName && itemDescription && itemLink) {
        wishlist.push({
            name: itemName,
            description: itemDescription,
            link: itemLink,
        });

        renderWishlist();
        wishlistForm.reset();
    }
});

// Initial render
renderWishlist();

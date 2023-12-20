
// Save santa by removing the lions, tigers, bears, and other nefarious creatures from the deeply
// nexted array.

const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
    return arr
        .reduce((acc, current) => {
            if (Array.isArray(current)) {
                return acc.concat(saveSanta(current));
            } else if (current === "🎅") {
                acc.push(current);
            }
            return acc;
        }, []);
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))
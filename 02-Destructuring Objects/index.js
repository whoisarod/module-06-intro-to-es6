const player = {
    name: "Lebron James",
    club: "LA Lakers",
    address: {
        city: "Los Angeles"
    }
}

const { name, club, address: { city } } = player;

let sentence = `${name} lives in ${city}`;
document.getElementById("sentence").innerText = sentence
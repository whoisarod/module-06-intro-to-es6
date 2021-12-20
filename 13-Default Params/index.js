const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger(); // 'someone' becomes the lead singer (default)
leadSinger("Chris Martin") // Chris Martin is the lead singer
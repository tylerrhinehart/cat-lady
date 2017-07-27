var id = 1

function Cat(name, picture) {
    this.id = id
    this.name = name
    this.picture = picture
    this.status = ['Happy', 'Bitey']
    this.petCount = 0

    id++
}
var catLady = {
    cats: []
}
var cat1 = new Cat('Mr. Snibbly', 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg');
var cat2 = new Cat('Snuffles', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGuNX5XmE5dS3VvNgU5CQlk8XZtlbTofQOEeoPMG2oa-2c6Nk4g');
var cat3 = new Cat('Tom', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr_w2kP8Wg9ESCJmgUCcsHj8zDgLM2cvpQbUTZt9LIdfHr0jF');
catLady.cats.push(cat1, cat2, cat3);

function draw(cats) {
    //draw all my cats to the screen in a given html format
    var template = ''
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        //check number of pets to determine status
        var statusIndex = 0
        if (cat.petCount > 5) {
            statusIndex = 1
        }
        template += `
            <div class="cat">
                <img src="${cat.picture}" alt="">
                <h3>Name: ${cat.name}</h3>
                <p>Status: ${cat.status[statusIndex]}</p>
                <p>Number of pets: ${cat.petCount}</p>
                <button type="button"  onclick="pet(${cat.id})">Pet Me!</button>
                <button type="button"  onclick="catnip(${cat.id})">Catnip</button>
            </div>
        `
    }
    document.getElementById("cats").innerHTML = template
}

function pet(catId) {
    var catToPet = findCatById(catLady.cats, catId)
    catToPet.petCount++
    draw(catLady.cats)
}

function catnip(catId) {
    var catToNip = findCatById(catLady.cats, catId)
    catToNip.petCount = 0
    draw(catLady.cats)
}

function findCatById(catArray, catId) {
    for (var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if(catId === cat.id) {
            return cat
        }        
    }
    console.error("No such cat")
}

draw(catLady.cats);
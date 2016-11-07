movies = []

movies.push({
    title: "Batman Begins",
    director_list: "Christopher Nolan",
    year: 2005,
    actors: ["Christian Bale", "Katie Holmes", "Michael Caine", "Morgan Freeman"],
    imdb_rating: 8.3,
    meta_rating: 70
})

movies.push({
    title: "Bourne Identity",
    director_list: "Doug Liman",
    year: 2002,
    actors: ["Matt Damon", "Franka Potente", "Julia Stiles", "Chris Cooper"],
    imdb_rating: 7.9,
    meta_rating: 68
})

movies.push({
    title: "Fast Five",
    director_list: "Justin Lin",
    year: 2011,
    actors: ["Vin Diesel", "Paul Walker", "Dwane Johnson", "Jordana Brewster"],
    imdb_rating: 7.3,
    meta_rating: 67
})

movies.push({
    title: "The Count of Monte Cristo",
    director_list: "Kevin Reynolds",
    year: 2002,
    actors: ["Jim Caviezel", "Guy Pearce", "Richard Harris", "James Frain", "Dagmara Dominczyk"],
    imdb_rating: 7.7,
    meta_rating: 61
})

movies.push({
    title: "Les Misérables",
    director_list: "Tom Hooper",
    year: 1998,
    actors: ["Liam Neeson", "Uma Thurman", "Geoffrey Rush", "Clair Danes"],
    imdb_rating: 7.5,
    meta_rating: 74
})

console.log(movies)

movies.sort(function(a, b) {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

movies_star = movies.sort(function (a, b) {
  return parseFloat(b.imdb_rating) - parseFloat(a.imdb_rating)
});


movies_star.forEach(function(mov) {
    document.getElementById('movie_list').innerHTML = document.getElementById('movie_list').innerHTML + "<td>" + mov.title + "</td>" + "<td>" + mov.director_list + "</td>" + "<td>" + mov.year + "</td>" + "<td>" + mov.actors.join(", ") + "</td>" + "<td>" + mov.imdb_rating + "</td>" + "<td>" + mov.meta_rating + "</td>"
})

console.log(JSON.stringify(movies))




console.log(JSON.stringify(movies_star))

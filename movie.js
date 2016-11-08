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

(movies).forEach(function(mov) {
    document.getElementById('movie_list').innerHTML = document.getElementById('movie_list').innerHTML + "<td>" + mov.title + "</td>" + "<td>" + mov.director_list + "</td>" + "<td>" + mov.year + "</td>" + "<td>" + mov.actors.join(", ") + "</td>" + "<td>" + mov.imdb_rating + "</td>" + "<td>" + mov.meta_rating + "</td>"
})

console.log(JSON.stringify(movies))

movies_star = []
movies_star.push.apply(movies_star, movies)

movies_star.sort(function(a, b) {
    return parseFloat(b.imdb_rating) - parseFloat(a.imdb_rating)
});
(movies_star).forEach(function(mov) {
    document.getElementById('movie_rating').innerHTML = document.getElementById('movie_rating').innerHTML + "<td>" + mov.title + "</td>" + "<td>" + mov.director_list + "</td>" + "<td>" + mov.year + "</td>" + "<td>" + mov.actors.join(", ") + "</td>" + "<td>" + mov.imdb_rating + "</td>" + "<td>" + mov.meta_rating + "</td>"
})
console.log(JSON.stringify(movies_star))

worst_movies = []

worst_movies.push({
    title: "Firewalker",
    director_list: "J. Lee Thompson",
    year: 1986,
    actors: ["Chuck Norris", "Louis Gossett Jr.", "Melody Anderson", "Will Sampson"],
    imdb_rating: 4.9,
    meta_rating: 0
})
worst_movies.push({
    title: "Howard the Duck",
    director_list: "Willard Huyck",
    year: 1986,
    actors: ["Lea Thompson", "Jeffrey Jones", "Tim Robbins", "Ed Gale"],
    imdb_rating: 4.9,
    meta_rating: 30
})
worst_movies.push({
    title: "Battlefield Earth",
    director_list: "Roger Christian",
    year: 2000,
    actors: ["John Travolta", "Barry Pepper", "Forest Whitaker", "Sabine Karsenti"],
    imdb_rating: 2.4,
    meta_rating: 9
})
worst_movies.push({
    title: "Jack and Jill",
    director_list: "Dennis Dugan",
    year: 2011,
    actors: ["Adam Sandler", "Al Pacino", "Katie Holmes", "Elodie Tougne"],
    imdb_rating: 3.4,
    meta_rating: 23
})
worst_movies.push({
    title: "Kazaam",
    director_list: "Paul Michael Glaser",
    year: 1996,
    actors: ["Shaquille O'Neal", "Francis Capra", "Ally Walker", "James Acheson"],
    imdb_rating: 2.8,
    meta_rating: 24
})

var worst = (worst_movies).forEach(function(mov) {
    document.getElementById('worst_list').innerHTML = document.getElementById('worst_list').innerHTML + "<td>" + mov.title + "</td>" + "<td>" + mov.director_list + "</td>" + "<td>" + mov.year + "</td>" + "<td>" + mov.actors.join(", ") + "</td>" + "<td>" + mov.imdb_rating + "</td>" + "<td>" + mov.meta_rating + "</td>"
});

console.log(JSON.stringify(worst_movies))

all_movies = movies.concat(worst_movies)
console.log(JSON.stringify(all_movies))

sort = all_movies.sort(function(a, b) {
    return parseFloat(b.imdb_rating) - parseFloat(a.imdb_rating)
});

var sort = (all_movies).forEach(function(mov) {
    document.getElementById('all').innerHTML = document.getElementById('all').innerHTML + "<td>" + mov.title + "</td>" + "<td>" + mov.director_list + "</td>" + "<td>" + mov.year + "</td>" + "<td>" + mov.actors.join(", ") + "</td>" + "<td>" + mov.imdb_rating + "</td>" + "<td>" + mov.meta_rating + "</td>"
});

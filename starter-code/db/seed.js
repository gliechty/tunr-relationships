var DB = require("../models").models;

// trying this above- 

var lucySongs = [
    {
        title: "O sole mio",
        duration: "3:21",
        date_of_release: "1990",
        album_title: "Three Tenors in Concert"
    },
    {
        title: "Nessun dorma",
        duration: "3:21",
        date_of_release: "1990",
        album_title: "Three Tenors in Concert"
    }
];

var rickyRoster = [
    {
        name: 'Luciano Pavarotti',
        photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
        nationality: 'Italiano',
        instrument: 'Voice',
        home_address: '1 Strada Roma'
    }
];


var artistCreate = function() {
    return DB.Artist.create({
    name: 'Luciano Pavarotti',
    photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
    nationality: 'Italiano',
    instrument: 'Voice',
    home_address: '1 Strada Roma'
  })
    .then(function(artist) {
    lucySongs.forEach(function(song) {
        song.artistId = artist.id;
    });
    DB.Song.bulkCreate(lucySongs);
});
};

var managerCreate = function() {
    return DB.Manager.create({
    name: 'Ricky Bobby',
    email: 'rbobby@gmail.com',
    office_number: '516-877-0304',
    cell_phone_number: '718-989-1231'
    })
    .then(function(manager){
        rickyRoster.forEach(function(artist){
            artist.managerId = manager.id;
        });
        DB.Artist.bulkCreate(rickyRoster);
    });
};

var songCreate = function() {
	return DB.Song.create({
	    title: 'The Best Song Ever',
	    duration: '3:31',
	    date_of_release: '7/13/2015',
	    album_title: 'Best Album Ever'
	});
};

// var lucySongs = [
//     {
//         title: "O sole mio",
//         duration: "3:21",
//         date_of_release: "1990",
//         album_title: "Three Tenors in Concert"
//     },
//     {
//         title: "Nessun dorma",
//         duration: "3:21",
//         date_of_release: "1990",
//         album_title: "Three Tenors in Concert"
//     }
// ];

// var rickyRoster = [
//     {
//         artist: 'Luciano Pavarotti'
//     }
// ];

artistCreate()
.then(managerCreate)
.then(songCreate)


// Added by us...

// .then(function(manager){
//     rickyRoster.forEach(function(artist){
//         artist.managerId = manager.id;
//     });
//     DB.Manager.bulkCreate(rickyRoster);
// })

// .then(function(artist) {
// 	lucySongs.forEach(function(song) {
// 		song.artistId = artist.id;
//         console.log(lucySongs);
// 	});
// 	DB.Song.bulkCreate(lucySongs);
// })

.then(function() {
	process.exit();
});


const movies = [
{name: 'Spirited Away',
rating: 5.0,
hasWatched: true
},
{name: 'My Neighbor Totoro',
rating: 4.6,
hasWatched: true
},
{name: 'Princess Mononoke',
rating: 4.9,
hasWatched: false
},
{name: 'The Night is Short, Walk On Girl',
rating: 5.0,
hasWatched: true
},
{name: 'Inuyasha The Movie',
rating: 4.0,
hasWatched: false
}
];


function hasWatched(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i]['hasWatched'] === true) {
			console.log('You have watched' + ' ' + arr[i]['name'] + ' - ' + arr[i]['rating'] + ' stars');
		} else {
			console.log('You have not watched' + ' ' + arr[i]['name'] + ' - ' + arr[i]['rating'] + ' stars');
		}
	}	
}


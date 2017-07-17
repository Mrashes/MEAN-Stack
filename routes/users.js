var express = require('express');
var router = express.Router();

// I want to get it to pull from twitter before the router functions
// const request = require('request');
// const twitter = require('twitter');

// //this creates the instance of it working
// let T = new twitter({ config })

// //using -q will search for a # on your input
// let query = '#chicago';

// //parameters for the api call
// let params = {
// 	q: query,
// 	// geocode:'41.7952713,-87.5773205,.2mi',
// 	count: 10,
// 	result_type: 'recent',
// 	lang: 'en',
// 	id: 2379574
	
// }

// let tweets = T.get('search/tweets', params, function(err, data, res) {
//   if (!err) {
//     return data
//   }
//   else {
//     console.log(err)
//   }
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json(
    // [tweets]
    [{
  	  id: 1,
  	  username: "mrashes"
    }, {
  	  id:2,
    	username: "coolguy"
    }]
  );
});

module.exports = router;

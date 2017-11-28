module.exports = function(app, passport) {
	app.get('/', function(req, res) {
		res.redirect('/login.html');
	});
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user
		});
	});
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/login.html');
	});
		app.get('/login', function(req, res) {
			res.render('login.ejs', { message: req.flash('loginMessage') });
		});

		app.post('/login', passport.authenticate('local-login', {
			successRedirect : '/profile', 
			failureRedirect : '/login.html',
			failureFlash : true
		}));

		app.get('/signup', function(req, res) {
			res.render('signup.ejs', { message: req.flash('signupMessage') });
		});

		app.post('/signup', passport.authenticate('local-signup', {
			successRedirect : '/home.html', 
			failureRedirect : '/login.html',
			failureFlash : true
		}));
		app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

		app.get('/auth/facebook/callback',
			passport.authenticate('facebook', {
				successRedirect : '/home.html',
				failureRedirect : '/login.html'
			}));

		app.get('/connect/local', function(req, res) {
			res.render('connect-local.ejs', { message: req.flash('loginMessage') });
		});
		app.post('/connect/local', passport.authenticate('local-signup', {
			successRedirect : '/home.html',
			failureRedirect : '/connect/local',
			failureFlash : true
		}));

		app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

		app.get('/connect/facebook/callback',
			passport.authorize('facebook', {
				successRedirect : '/home.html',
				failureRedirect : '/login.html'
			}));

	app.get('/unlink/local', isLoggedIn, function(req, res) {
		var user            = req.user;
		user.local.email    = undefined;
		user.local.password = undefined;
		user.save(function(err) {
			res.redirect('/login.html');
		});
	});

	app.get('/unlink/facebook', isLoggedIn, function(req, res) {
		var user            = req.user;
		user.facebook.token = undefined;
		user.save(function(err) {
			res.redirect('/login.html');
		});
	});
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	
	res.redirect('/profile');
}

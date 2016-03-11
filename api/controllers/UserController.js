/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	novo: function (req,res) {
     res.view('user/new');
  },
  criar: function (req, res, next) {

    var userObj = {
      nome: req.param('nome'),
      email: req.param('email'),
      senha: req.param('senha')
    }

    User.create(userObj).exec(function(err,users) {
      if(err) {
        //console.log(err);
        return next(err);
      }
      else {
        res.json(users);
      }
    });

  }
};


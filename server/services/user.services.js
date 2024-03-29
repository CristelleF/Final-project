module.exports = function(app) {
    const userModel= require('../models/user/user.model');
    const LocalStrategy = require('passport-local').Strategy;
    const passport = require('passport');
    const bcrypt = require('bcryptjs');
    
    //Generate a salt
  const salt=bcrypt.genSaltSync(10);

    passport.serializeUser(serializeUser);

function serializeUser(user, done) {
   done(null, user);
 }
 passport.deserializeUser(deserializeUser);

 function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function(user) {
        done(null, user);
      },
      function(err) {
        done(err, null);
      }
    );
  }
  //Login with local strategy
  passport.use(new LocalStrategy(localStrategy));

  async function localStrategy(username, password, done){
    //Check if username exists
    const data= await userModel.findUserByUsername(username);
    //Check if password is a match
    if(data&& bcrypt.compareSync(password,data.password)){
        return done(null, data);
    //Check is this user's password hasn't been encrypted
    }else if (data && password === data.password) {
      //encrypt their password
      data.password=bcrypt.hashSync(data.password, salt);
      await userModel.updateUser(data);
      return done(null, data);
    }else{
        return done(null, false);
    }

  }

   // users data
   let users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
    {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"},
    {_id: "274", username:"Cristelle", password:"Cris", firstName:"Cristelle", lastName:"Fofana", email:"telmesumting@gmail.com"}
]

  //Login
  app.post('/api/login', passport.authenticate('local'), (req,res)=>{
      const user=req.user;
      res.json(user);
  });

  //Check if there is a user logged in
  app.get('/api/loggedIn',(req,res)=>{
   res.send(req.isAuthenticated() ? req.user:'0');
  });

  //Logout
  app.post('/api/logout', (req,res)=>{
    req.logOut();
    res.send(200);
  });

  //Register
  app.post('/api/register', async (req, res)=>{
    const user=req.body;

    //Encrypt user password
    user.password=bcrypt.hashSync(user.password, salt);
    const data= await userModel.createUser(user);
    req.login(data, ()=>{
      res.json(data);
    });
  });
    // Find users by username and password
    app.get('/api/user', async (req, res)=> {
        const username = req.query['username'];
        const password = req.query['password'];
        let user;
        if (username&&password) {
            user=await userModel.findUserByCredentials(username, password);
        } else if (username) {
            user = await userModel.findUserByUsername(username);
        }
        res.json(user);
    });
        // login to check user credentials
        if(username && password) {
            user = users.find((user)=>{
                return user.username === username && user.password === password
            })   
        }
        // check if username is taken
        if(username) {
            user = users.find((user)=>{
                return user.username === username
           })
        }

        
    

    // Create new user
    app.post('/api/user', async (req, res) => {
        const user = req.body;
        const data=await userModel.createUser(user);
        res.json(data);
    });

    // Find user by _id
    app.get('/api/user/:uid', async (req, res) => {
        const uid = req.params['uid'];
        let user;
        user = await userModel.findUserById(uid);
        res.json(user);
    });

    // Update user
    app.put('/api/user', async (req, res) => {
        const newUser = req.body;
        userModel.udateUser(newUser);
        res.json(data);
    });

//Find all users
app.get('/api/users', async(req,res)=>{
  const data = await userModel.FindAllUsers();
  res.json(data);
})

//Delete user
app.delete('/api/user/:id', async (req, res)=>{
  const id=req.params['id'];
  const data = await userModel.deleteUser(id);
  res.json(data);
})
};
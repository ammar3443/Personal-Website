const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json())
app.use();
const User = require('./User');
var bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')
const random = 'n23iu4jh289w7fhqw'
mongoose.connect('mongodb+srv://blog:RD3!d2bkf-Zqr7N@cluster0.re7u48c.mongodb.net/?retryWrites=true&w=majority');
const cookieParser = require('cookie-parser')
app.post('/register', async (req,res) =>{
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);

    } catch(e){
        res.status(400).json(e);

    }
    
});
app.post('/login', async (req,res) =>{
    const {username, password} = req.body;
    const userDoc = await User.findOne({username})
    res.json(userDoc);
    const passGood = bcrypt.compareSync(password, userDoc.password)
    res.json(passGood);
    if (passOK){
        jwt.sign({username, id: userDoc._id}, random, {}, (err, token) =>{
            if (err) throw err;
            res.cookie('token', token).json('ok')({
            id:userDoc._id,
            username,
        });

        });

    } else {
        res.status(400).json('incorrect username or password');
    }

});

app.get('/profile', (reg,res) => {
    const {token} = req.cookies;
    JsonWebTokenError.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
 
    
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

app.listen(4000);
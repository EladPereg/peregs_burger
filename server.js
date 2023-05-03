const express = require(`express`);
const bp = require(`body-parser`);
const db = require(`mongoose`);
const { urlencoded } = require("body-parser");
// const fs = require(`fs`);

const app = express();



db.connect(`mongodb+srv://eladpereg:pereg1212@cluster0.67w6wev.mongodb.net/SvBurgerNew`, () => {
    console.log(`db is on`);
})
app.use(bp.json());
app.use(express.static(`pages`));
// app.use(urlencoded({ extended: false }))
app.use(urlencoded({ extended: false }))
const userSchema = db.Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    password: String
});
const userlist = db.model(`users`, userSchema);

app.get(`/signup`, (req, res) => {
    res.sendFile(__dirname + `/pages/signup.html`)
})
app.get(`/signin`, (req, res) => {
    res.sendFile(__dirname + `/pages/signin.html`)
})
app.get(`/thank`, (req, res) => {
    res.sendFile(__dirname + `/pages/thank.html`)
})
app.get('/Menu2', (req, res) => {
    res.sendFile(`${__dirname}/pages/Menu2.html`);
})
app.get(`/pay`, (req, res) => {
    res.sendFile(__dirname + `/pages/pay.html`)
})

app.post(`/signin`, (req, res) => {
    res.sendFile(__dirname + `/pages/Menu2.html`)
})
app.post(`/pay`, (req, res) => {
    res.sendFile(__dirname + `/pages/thank.html`)
})

app.post(`/signup`, (req, res) => {
    let user = {
        name: {
            first: req.body.fname,
            last: req.body.lname
        },
        email: req.body.emailadd,
        password: req.body.pass
    }
    addNewUser(user);
    res.sendFile(__dirname + `/pages/signin.html`)
})

const addNewUser = async (user) => {
    await userlist.insertMany(user);
    let arr = await userlist.find()
    console.log(arr)
}

app.post(`/validate`, (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    const finndUser = async () => {
        let user = await userlist.findOne({ email: email, password: password })
        res.json(user)
        console.log(user)
    }
    finndUser();
})



app.get(`/deleteAll`, (req, res) => {
    const del = async () => {
        await userlist.deleteMany()
    }
    del();
    res.send("ok")
})

app.listen(`3000`, () => {
    console.log(`server is active`)
})
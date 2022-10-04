require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const hbs = require("hbs");
const port = process.env.PORT;
const app = express();
const Featured = require("./models/featured");
const About = require("./models/about");
const House = require("./models/house");
const Plot = require("./models/plot.js");

// db connection
mongoose.connect(process.env.DATABASE, () => {
    console.log("db connected")
    // Plot.create({
    //     Images: [
    //         { PlotImg: "../img/demo-1.jpg" },
    //         { PlotImg: "../img/demo-2.jpg" },
    //     ],
    //     Price: "21,00,000",
    //     SquareFt: "2000",
    //     Address: "Pochinki, Erangle, Pubg",
    //     PropertyDetail: "Hello this is demo details. this is also jirhfr fhdf near very go d aji"
    // })
    // House.create({
    //     Images: [
    //         { HouseImg: "../img/demo-1.jpg" },
    //         { HouseImg: "../img/demo-2.jpg" },
    //     ],
    //     Price: "90212",
    //     Bedroom: "2",
    //     Bathroom: "2",
    //     Kitchen: "1",
    //     SquareFt: "3213",
    //     Address:"Gokul Nagar, Pulgaon, Durg",
    //     PropertyDetail: "Hello this is demo"
    // })
    // About.create({
    //     AboutUs:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mqui ut nihil, eaque voluptas aliquam inexercitationem quia eligendi!",
    //     AboutImg:"../img/about-img.jpg"
    // })
    // Featured.create({
    //     imageUrl:"../img/demo-1.jpg",
    //     price:"12,00,000",
    //     location:"Gandhi Nagar, Road-3,Durg",
    //     landmark:"Near Indial oil petrol pump",
    //     contactNo:"93XXXXXXXX",
    //     squareFt:"1250",
    //     bedroom:"2",
    //     bathroom:"2",
    //     kitchen:"1"
    // })
});

// Serving the static directory
app.use(express.static(path.join(__dirname, '../static')));

// Template Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
hbs.registerPartials(path.join(__dirname, "../views/partials"));

// routes
app.get("/", async (req, res) => {
    const featured = await Featured.find();
    const about = await About.findOne({ "_id": "633062bf554a2a572195ca7b" });
    res.render("home", {
        featured: featured,
        about: about,
    });
});

app.get("/fea", async (req, res) => {
    const house = await House.find();
    const plot = await Plot.find();
    res.render("featured-more", {
        house: house,
        plot: plot
    });
});

// listening to the port
app.listen(port, () => {
    console.log("Server started...")
});
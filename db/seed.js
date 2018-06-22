
const Songs = require("../models/Songs");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

  User.find({}).remove(() => {
    Songs.find({}).remove(() => {
let Fru = User.create({ 
    local: {
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      }
    }).then(user => {
        Promise.all([
          Songs.create({
           content: "mmmm",
           title:"Itchin", 
           artist: {
              name: "Lefufru", 
            },
            genre: "Trap",
          }).then(song => {
            user.songs.push(song);
          }),
          Songs.create({
             content: "mmmm",
             title:"inde",
            artist: {
              name: "Lefufru", 
            },
            genre: "indie",
          }).then(song => {
            user.songs.push(song);
          })
        ]).then(() => {
          user.save(err => console.log(err));
        });
    });

    let elmer = User.create({
      local: {
        email: "elmerfudd@gmail.com",
        password: createPassword("elmerfudd")
      }
    }).then(user => {
        user.save(err => console.log(err));
      Promise.all([
        Songs.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
            title: "Lefufru", 
            artist: {
              name:"inde"
            },
            genre: "indie",
          }).then(song => {
            user.songs.push(song);
          }),
        Songs.create({
          content: "Kiww da wabbit!",
            title: "Lefufru", 
            artist: {
              name:"inde"
            },
            genre:"indie",
        }).then(song => {
          user.songs.push(song);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});
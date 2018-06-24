
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
          User.save(err => console.log(err));
        });
    });
    let daffy = User.create({
      local: {
        email: "daffyduck@gmail.com",
        password: createPassword("daffyduck")
      }
    }).then(user => {
      Promise.all([
        Songs.create({
          content: "Who's this Duck Dodgers any how?",
          author: user._id
        }).then(Songs => {
          user.songs.push(Songs);
        }),
        Songs.create({
          content: "You're dethpicable.",
          author: user._id
        }).then(Songs => {
          User.Songs.push(Songs);
        })
      ]).then(() => {
        User.save(err => console.log(err));
      });
    });

    let elmer = User.create({
      local: {
        email: "elmerfudd@gmail.com",
        password: createPassword("elmerfudd")
      }
    }).then(user => {
      Promise.all([
        Songs.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
          author: user._id
        }).then(Songs => {
          User.Songs.push(Songs);
        }),

        Songs.create({
          content: "Kiww da wabbit!",
          author: user._id
        }).then(Songs => {
          User.Songs.push(Songs);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});

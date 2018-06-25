
const Songs = require("../models/songs");
const User = require("../models/User");
const Artist = require("../models/artist");
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
    }). then(user => {
//       user.save(err => console.log(err))
//     }))
        Promise.all([
          Songs.create({
           content: "mmmm",
           title:"Itchin", 
           artist: {
              name: "Lefufru", 
            },
            genre: "Trap",
            author: user._id
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
            author: user._id
          }).then(song => {
            user.songs.push(song);
          })
          ]).then(() => {
            user.save(err => console.log(err));
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
          title:"inde",
            artist: {
              name: "Lefufru", 
            },
            genre: "indie",
          author: user._id
        }).then(song => {
          user.songs.push(song);
        }),
        Songs.create({
          content: "You're dethpicable.",
          title:"inde",
            artist: {
              name: "Lefufru", 
            },
            genre: "indie",
          author: user._id
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
      Promise.all([
        Songs.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
            title:"inde",
            artist: {
              name: "Lefufru", 
            },
            genre: "indie",
            author: user._id
        }).then(song => {
          user.songs.push(song);
        }),

        Songs.create({
          content: "Kiww da wabbit!",
          title:"inde",
            artist: {
              name: "MElouche", 
            },
            genre: "Rock",
          author: user._id
        }).then(song => {
          user.songs.push(song);
        })
      ]).then(() => {
        user.save(err => console.log(err));
        });
    });
  });
});
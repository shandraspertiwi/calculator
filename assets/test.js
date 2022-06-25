console.log("Congrats!");
const firstName = prompt("Siapa nama depanmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " +  "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " +  "!");
}


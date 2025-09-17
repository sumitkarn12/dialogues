const dialogues = [{ "dialogue": "Teja main hoon, Mark idhar hai!", "movie": "Andaz Apna Apna" }, { "dialogue": "Crime master Gogo naam hai mera, aankhen nikal ke gotiyaan khelta hoon.", "movie": "Andaz Apna Apna" }, { "dialogue": "Vasco da Gama ka baap bhi yeh match nahi jeet sakta!", "movie": "Andaz Apna Apna" }, { "dialogue": "Utha le re baba, utha le! Mereko nahi re, in dono ko utha le!", "movie": "Hera Pheri" }, { "dialogue": "Yeh Baburao ka style hai!", "movie": "Hera Pheri" }, { "dialogue": "Agar main chahta, toh tumhari aankhon ke neeche do black spot hota, samjha kya?", "movie": "Hera Pheri" }, { "dialogue": "Rakh ke bol, rakh ke bol!", "movie": "Hera Pheri" }, { "dialogue": "25 din mein paisa double!", "movie": "Phir Hera Pheri" }, { "dialogue": "Ye bijness karne ka tareeka hai.", "movie": "Phir Hera Pheri" }, { "dialogue": "English is a very phunny language!", "movie": "Chupke Chupke" }, { "dialogue": "Mote mote log hamesha tez ghoorta hai.", "movie": "Chupke Chupke" }, { "dialogue": "Kahan chale gaya tha yeh phool, jo tumhare haath mein tha!", "movie": "Chupke Chupke" }, { "dialogue": "Circuit, ye chemical locha hai!", "movie": "Munna Bhai M.B.B.S." }, { "dialogue": "Mamu, tum toh bade heavy driver nikle!", "movie": "Munna Bhai M.B.B.S." }, { "dialogue": "Agar tumne mujhe ek baar aur ullu banaya, toh main tumhe ullu ki tarah seedha khamba par latka dunga!", "movie": "Golmaal: Fun Unlimited" }, { "dialogue": "Mujhe jo naam mila hai, main usi se khush hoon.", "movie": "Golmaal: Fun Unlimited" }, { "dialogue": "Dil ka raasta pet se hota hai.", "movie": "Golmaal Again" }, { "dialogue": "Kuch logon ki fitrat hoti hai logon ko hamesha confuse karna.", "movie": "Golmaal Again" }, { "dialogue": "Don’t underestimate the power of a common man!", "movie": "Chennai Express" }, { "dialogue": "Thangabali… Thangabali!", "movie": "Chennai Express" }, { "dialogue": "Iss umar mein sight de raha hai, buddhe!?", "movie": "Chennai Express" }, { "dialogue": "Jahanpanaah, tussi great ho, tohfa qubool karo.", "movie": "3 Idiots" }, { "dialogue": "Life is a race, if you don’t run fast, you’ll be like a broken anda!", "movie": "3 Idiots" }, { "dialogue": "Yeh toh asli painting hai! Itni badi painting dekh ke dimaag kaam nahi kar raha.", "movie": "Welcome" }, { "dialogue": "Control Uday, control!", "movie": "Welcome" }, { "dialogue": "Mera naam hai Manav, main akal se paidal hoon.", "movie": "Dhamaal" }, { "dialogue": "Sorry bolta hoon, sorry bolta hoon, bas sorry bolta hoon.", "movie": "Dhamaal" }, { "dialogue": "Maa da laadla bigad gaya!", "movie": "Dostana" }, { "dialogue": "Picture abhi baaki hai mere dost.", "movie": "Om Shanti Om" }, { "dialogue": "Hum cake khane ke liye kahin bhi jaa sakte hain.", "movie": "Dil Chahta Hai" }, { "dialogue": "Ya toh dosti gehri hai, ya yeh photo 3D hai!", "movie": "Dil Chahta Hai" }, { "dialogue": "Confusion hi confusion hai, solution kuch pata nahi.", "movie": "PK" }, { "dialogue": "Hum tum mein itne ched karenge ki confuse ho jaoge ki saans kahan se le aur… kahan se nahi!", "movie": "Dabangg" }, { "dialogue": "Apne ko to sirf baap banna hai, uska sasur nahi banna hai.", "movie": "Housefull" }, { "dialogue": "Mereko toh aisa dhak dhak ho raha hai!", "movie": "Hera Pheri" }, { "dialogue": "Problem yeh hai ki woh ladki hai… aur kya problem chahiye!", "movie": "Pyaar Ka Punchnama" }, { "dialogue": "Hamare India mein shaadi ek aisi cheez hai jo family ke saamne jeena aur marna dono mushkil kar deti hai.", "movie": "Pyaar Ka Punchnama" }, { "dialogue": "Iska toh plan hi ulta hai!", "movie": "Hungama" }, { "dialogue": "Baap hamesha baap hota hai, beta hamesha beta hota hai!", "movie": "Hungama" }, { "dialogue": "Mere dad ne kaha tha, shaadi mat karna, tabhi mere dad happy hai.", "movie": "Garam Masala" }, { "dialogue": "Bahut jaldi shaadi karna, warna girlfriend dost ban jaati hai.", "movie": "Garam Masala" }, { "dialogue": "Tumhara naam kya hai? Chhota Bachchan, matlab Abhishek Bachchan.", "movie": "Bol Bachchan" }, { "dialogue": "Police station hai, tumhare baap ka ghar nahi!", "movie": "Bade Miyan Chote Miyan" }, { "dialogue": "Maal utha lo, phir bhaago!", "movie": "Bade Miyan Chote Miyan" }, { "dialogue": "Babulal, tumne ghanti kyun nahi bajayi?", "movie": "Hulchul" }, { "dialogue": "Shaadi ek aisi laddoo hai, jo khaye woh pachtaye, jo na khaye woh aur bhi zyada pachtaye.", "movie": "Hulchul" }, { "dialogue": "Mera pati mujhse kitna pyaar karta hai, par usko mere saath rehna bilkul pasand nahi.", "movie": "Queen" }, { "dialogue": "Mujhe bill dekhne ka bada shauk hai!", "movie": "Queen" }];

// Get the HTML elements
const dialogueText = document.getElementById('dialogue-text');
const dialogueContainer = document.getElementById('dialogue-container');
const dialogueMovie = document.getElementById('dialogue-movie');
const timer = document.getElementById('timer');
const DURATION = 10000;

// Function to generate a random dialogue
async function getRandomDialogue() {
  timer.style.animation = ``;

  // Generate a random index number from 0 to the length of the quotes array - 1
  const randomIndex = Math.floor(Math.random() * dialogues.length);

  // Get the random dialogue object
  const randomDialogue = dialogues[randomIndex];

  // Update the HTML with the new dialogue and author
  dialogueText.textContent = randomDialogue.dialogue;
  dialogueMovie.textContent = `${randomDialogue.movie}`;
  setTimeout( () => {
    timer.style.animation = `t-reduce ${DURATION/1000}s linear`;
  }, 100);
}

// Optional: Display a dialogue on page load
// Call the function once when the script loads to show an initial dialogue
getRandomDialogue();
setInterval(getRandomDialogue, DURATION );

dialogueText.addEventListener( "click", ( e ) => {
  if ( e.detail > 1 ) {
    if ( document.fullscreenElement ) {
      document.exitFullscreen();
    } else {
      // document.documentElement.requestFullscreen();
      dialogueContainer.requestFullscreen();
    }
  }
})
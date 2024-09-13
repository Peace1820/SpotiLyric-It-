const songTitle = document.getElementById("title");
const artistName = document.getElementById("artist");
const lyricsText = document.getElementById("lyrics-text");

const clearLyricsLine = document.getElementById("button4");
const clearAllLyrics = document.getElementById("button5");
const resetCard = document.getElementById("button6");

const cardViewDiv = document.getElementById("card-view");
const cardDiv = document.getElementById("card");
const toggleButton = document.getElementById("toggle");

const downloadButton = document.getElementById("download-button");

// Remove last line
function removeLine() {
  const lastLine = lyricsText.lastElementChild;
  if (lastLine) {
    lastLine.remove();
  }
}

function clearLyrics() {

  const lyricClearConfirmation = window.confirm(
    "All lyrics of the card will be cleared!"
  );

  if (lyricClearConfirmation) {
  while (lyricsText.firstChild) {
    lyricsText.removeChild(lyricsText.firstChild);
  }
}
}

function reset() {
  const resetCardConfirmation = window.confirm(
    "All contents of the card will be cleared!"
  );
  if (resetCardConfirmation) {
    const imgElement = document.getElementById("album-img-src");
    songTitle.textContent = "Song Title";
    artistName.textContent = "Artist Name";
    lyricsText.textContent = "Song Lyrics";
    imgElement.src = "default-image.png";
    cardViewDiv.style.backgroundColor = "#00a573";
    document.body.style.backgroundColor = "#00a573";
    cardDiv.style.backgroundColor = "#1db954";
    cardDiv.style.transform = `scale(1)`; 
    songTitle.style.color = 'black';
    artistName.style.color = 'black';
    lyricsText.style.color = 'black';
    document.getElementById('color-square').style.backgroundColor = "#1db954";
    document.getElementById('color-square2').style.backgroundColor = "#00a573";
    document.getElementById('color-square3').style.backgroundColor = "black";
    document.getElementById('logo-text').style.color = "black";
    
  }
}

const pickr = Pickr.create({
  el: ".color-picker",
  theme: "nano",
  default: "#ffffff",
  position: "bottom-middle",

  swatches: [
    "#1db954",
    "#4577a3",
    "#c0697c",
    "#262626",
    "#b9732e",
    "#b1474d",
    '#a87b38',
    "#c84095",
    "#8780c2",
    "#453ab8",
    "#ffed2d",
    "#e6e6e6",
  ],

  components: {
    preview: true,

    interaction: {
      hex: true,
      rgba: true,
      input: true,
    },
  },
});

pickr.on("change", (color, instance) => {
  const rgbaColor = color.toRGBA().toString();
  cardViewDiv.style.backgroundColor = rgbaColor;
  document.body.style.backgroundColor = rgbaColor;
  document.getElementById('color-square').style.backgroundColor = rgbaColor;
});

const pickr2 = Pickr.create({
  el: ".color-picker2",
  theme: "nano", 
  default: "#ffffff",
  position: "bottom-middle",

  swatches: [
    "#1db954",
    "#4577a3",
    "#c0697c",
    "#262626",
    "#b9732e",
    "#b1474d",
    '#a87b38',
    "#c84095",
    "#8780c2",
    "#453ab8",
    "#ffed2d",
    "#e6e6e6",
  ],

  components: {
    preview: true,

    interaction: {
      hex: true,
      rgba: true,
      input: true,
    },
  },
});

pickr2.on("change", (color, instance) => {
  const rgbaColor2 = color.toRGBA().toString();
  cardDiv.style.backgroundColor = rgbaColor2;
  document.getElementById('color-square2').style.backgroundColor = rgbaColor2;

});

const pickr3 = Pickr.create({
  el: ".color-picker3",
  theme: "nano", 
  default: "#ffffff",
  position: "bottom-middle",

  swatches: [
    "#1db954",
    "#4577a3",
    "#c0697c",
    "#262626",
    "#b9732e",
    "#b1474d",
    '#a87b38',
    "#c84095",
    "#8780c2",
    "#453ab8",
    "#ffed2d",
    "#e6e6e6",
  ],
  components: {
    preview: true,

    interaction: {
      hex: true,
      rgba: true,
      input: true,
    },
  },
});

pickr3.on("change", (color, instance) => {
  const rgbaColor3 = color.toRGBA().toString();
  lyricsText.style.color = rgbaColor3;
  songTitle.style.color = rgbaColor3;
  artistName.style.color = rgbaColor3;
  document.getElementById('color-square3').style.backgroundColor = rgbaColor3;
});

const lightModeLogo = document.getElementById("light-mode-logo");
const darkModeLogo = document.getElementById("dark-mode-logo");


function toggleFunction() {
    if (darkModeLogo.style.display !== 'none') {
        lightModeLogo.style.display = 'block';
        darkModeLogo.style.display = 'none';
        songTitle.style.color = 'white';
        artistName.style.color = 'white';
        lyricsText.style.color = 'white';
        cardDiv.style.backgroundColor = '#111111';
        cardViewDiv.style.backgroundColor = '#252525';
        document.body.style.backgroundColor = '#252525';
        document.getElementById('logo-text').style.color = 'white';
        document.getElementById('color-square').style.backgroundColor = '#252525' ;
        document.getElementById('color-square2').style.backgroundColor = '#111111' ;
        document.getElementById('color-square3').style.backgroundColor = 'white' ;
        
    } 

    else {
        lightModeLogo.style.display = 'none';
        darkModeLogo.style.display = 'block';
        songTitle.style.color = 'black';
        artistName.style.color = 'black';
        lyricsText.style.color = 'black';
        cardDiv.style.backgroundColor = '#1DB954';
        cardViewDiv.style.backgroundColor = '#00A573';
        document.body.style.backgroundColor = '#00A573';
        document.getElementById('logo-text').style.color = 'black';
        document.getElementById('color-square').style.backgroundColor = '#00A573' ;
        document.getElementById('color-square2').style.backgroundColor = '#1DB954' ;
        document.getElementById('color-square3').style.backgroundColor = 'black' ;
    }
}

function toggleLogo() {
    if (darkModeLogo.style.display !== 'none') {
        lightModeLogo.style.display = 'block';
        darkModeLogo.style.display = 'none';
        document.getElementById('logo-text').style.color = 'white';
    } 
    else {
        lightModeLogo.style.display = 'none';
        darkModeLogo.style.display = 'block';
        document.getElementById('logo-text').style.color = 'black';
    }
}


// Get card scale for Image download
let isDownloading = false; // Flag to prevent multiple downloads

function getScaleFactor() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth < 725 || screenHeight < 893) {
    return 1.0; // Mobile view
  } else if (screenWidth < 1024) {
    return 1.5; // Tablet view
  } else {
    return 1.9; // Desktop view
  }
} 

// Change card size

const sliderValue = document.getElementById("scaleRange");
function changeScale() {

  const isDesktop = window.matchMedia("(min-width: 40em)").matches;

  if (!isDesktop) {
    
    if (sliderValue.value == "1") {
      cardDiv.style.transform = `scale(0.5)`;  
    } else if (sliderValue.value == "2") {
      cardDiv.style.transform = `scale(0.6)`; 
    } else if (sliderValue.value == "3") {
      cardDiv.style.transform = `scale(0.7)`; 
    } else if (sliderValue.value == "4") {
      cardDiv.style.transform = `scale(0.8)`; 
    } else if (sliderValue.value == "5") {
      cardDiv.style.transform = `scale(0.9)`; 
    } else if (sliderValue.value == "6") {
      cardDiv.style.transform = `scale(1.0)`;
    } else if (sliderValue.value == "7") {
      cardDiv.style.transform = `scale(1.1)`;
    } 
  } else {
    
    if (sliderValue.value == "1") {
      cardDiv.style.transform = `scale(0.8)`;  
    } else if (sliderValue.value == "2") {
      cardDiv.style.transform = `scale(0.9)`; 
    } else if (sliderValue.value == "3") {
      cardDiv.style.transform = `scale(1.0)`; 
    } else if (sliderValue.value == "4") {
      cardDiv.style.transform = `scale(1.1)`; 
    } else if (sliderValue.value == "5") {
      cardDiv.style.transform = `scale(1.2)`; 
    } else if (sliderValue.value == "6") {
      cardDiv.style.transform = `scale(1.3)`; 
    } else if (sliderValue.value == "7") {
      cardDiv.style.transform = `scale(1.4)`; 
    } else if (sliderValue.value == "8") {
      cardDiv.style.transform = `scale(1.5)`; 
    } else if (sliderValue.value == "9") {
      cardDiv.style.transform = `scale(1.6)`; 
    } else if (sliderValue.value == "10") {
      cardDiv.style.transform = `scale(1.7)`; 
    }
  }
}

sliderValue.oninput = changeScale;



// Function to download the card as a JPEG image
function downloadCardAsJPG() {
  if (isDownloading) return; // Prevent multiple downloads

  isDownloading = true; // Set flag to true

  const cardViewDiv = document.getElementById("card-view");
  const scale = getScaleFactor();

  document.fonts.ready.then(() => {
    domtoimage
      .toJpeg(cardViewDiv, {
        quality: 1.0, // Highest quality
        width: cardViewDiv.clientWidth * scale,
        height: cardViewDiv.clientHeight * scale,
        style: {
          transform: `scale(1)`,
          transformOrigin: "center",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      })
      .then(function (dataUrl) {
        const link = document.createElement("a");
        const songTitle = document.getElementById("title").textContent.trim() || "card";
        const fileName = songTitle.replace(/(<([^>]+)>)/gi, "") + ".jpeg";
        link.download = fileName;
        link.href = dataUrl;
        link.click();

        // Reset flag after download
        isDownloading = false;
      })
      .catch(function (error) {
        console.error("Oops, something went wrong!", error);

        // Reset flag in case of error
        isDownloading = false;
      });
  });
}

document.getElementById("download-button").addEventListener("click", function () {
  downloadCardAsJPG();
  });

// Event Listeners
clearLyricsLine.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clear");
  removeLine();
});

clearAllLyrics.addEventListener("click", function (event) {
  event.preventDefault();
  clearLyrics();
});

resetCard.addEventListener("click", function (event) {
  event.preventDefault();
  reset();
});

toggleButton.addEventListener('click', function(event){
  toggleFunction();
});

document.querySelector('.logo').addEventListener('click', function(event) {
  event.preventDefault(); 
  toggleLogo();       
});

downloadButton.addEventListener("click", function () {
  downloadCardAsJPG();
});


// Keypress Functionality
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "z") {
    event.preventDefault();
    removeLine();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.shiftKey && event.altKey && event.key === "C") {
    event.preventDefault();
    clearLyrics();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.shiftKey && event.altKey && event.key === "R") {
    event.preventDefault();
    reset();
  }
});


document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.altKey && event.key === "s") {
    event.preventDefault();
    downloadCardAsJPG();
  }
});

// Image Upload
document.getElementById("album-img").addEventListener("click", function () {
  document.getElementById("imageUpload").click(); 
});

document.getElementById("imageUpload").addEventListener("change", function () {
  console.log("Image upload");
  const fileInput = document.getElementById("imageUpload");
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgElement = document.getElementById("album-img-src");
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

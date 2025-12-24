//Setting up map icons
const iconData = [
  {
    default: "MapIcon.svg",
    selected: "SelectedIcon.svg"
  }
];
//3 Text Parts
const Text = [
  {Heading: "Science Centre Singapore",
   Paragraph: "Explore interactive tech exhibits, robotics, and AI demos for all ages."
  },
  {Heading: "VivoCity",
   Paragraph: "Discover electronics, gaming gear, and VR experiences in Singapore’s largest shopping hub."
  },
  {Heading: "Funan Digitalife Mall",
   Paragraph: "A one-stop destination for the latest gadgets, smart home solutions, and tech lifestyle."
  }
]
//connecting the values to HTML
const MapHeading=document.getElementById("MapHeading");
const MapParagraph=document.getElementById("MapParagraph");

const IconOne=document.getElementById("IconOne");
const IconTwo=document.getElementById("IconTwo");
const IconThree=document.getElementById("IconThree");
//Function for when loading first time on the page
function FirstPick () {
  IconOne.src= iconData[0].selected;
  MapHeading.textContent= Text[0].Heading;
  MapParagraph.textContent= Text[0].Paragraph;
}
//Clickable icon for Icone One
IconOne.addEventListener("click", () => {
  MapHeading.style.opacity= 0;
  MapParagraph.style.opacity= 0;

  setTimeout(() => {
    IconOne.src= iconData[0].selected;
    IconTwo.src= iconData[0].default;
    IconThree.src= iconData[0].default;

    MapHeading.textContent= Text[0].Heading;
    MapParagraph.textContent= Text[0].Paragraph;

    MapHeading.style.opacity= 1;
  MapParagraph.style.opacity= 1;
  }, 200);
});
//Clickable icon for Icone Two
IconTwo.addEventListener("click", () => {
  MapHeading.style.opacity= 0;
  MapParagraph.style.opacity= 0;

  setTimeout(() => {
    IconOne.src= iconData[0].default;
    IconTwo.src= iconData[0].selected;
    IconThree.src= iconData[0].default;

    MapHeading.textContent= Text[1].Heading;
    MapParagraph.textContent= Text[1].Paragraph;

    MapHeading.style.opacity= 1;
  MapParagraph.style.opacity= 1;
  }, 200);
});
//Clickable icon for Icone Three
IconThree.addEventListener("click", () => {
  MapHeading.style.opacity= 0;
  MapParagraph.style.opacity= 0;

  setTimeout(() => {
    IconOne.src= iconData[0].default;
    IconTwo.src= iconData[0].default;
    IconThree.src= iconData[0].selected;

    MapHeading.textContent= Text[2].Heading;
    MapParagraph.textContent= Text[2].Paragraph;

    MapHeading.style.opacity= 1;
  MapParagraph.style.opacity= 1;
  }, 200);
});
//Function for when loading first time on the page
FirstPick();
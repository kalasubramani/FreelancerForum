//List of freelancer names
const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose"
];

//List of occupation
const occupations = [
  "Gardener",
  "Programmer",
  "Teacher",
  "Gardner",
  "Artist",
  "Self Employed",
  "Home Maker",
  "Retired",
  "Student"
];

//List of starting price
const startingPrice=[
  30,35,40,45,50,55,60,65
];

// create two random freelancers to start with
let freelancers =[];
freelancers.push(getRandomFreelancer());
freelancers.push(getRandomFreelancer());

//select the container element from DOM to add dynamic data
const container = document.querySelector(".container");
//render dynamic contect to DOM
renderContents();


//render contents to page
function renderContents(){
  //form html string to add HTML elements and corresponding data
   const html = freelancers.map((freelancer)=>{
    return `<div class='freelancerText'>
    <div class='itemText'> ${freelancer.name}</div>
    <div class='itemText'>${freelancer.occupation}</div>
    <div class='itemPrice'>${freelancer.price}</div>    
  </div><hr>`
  });
  container.innerHTML = html.join("");
}

// create a freelancer object by selecting random names, occupation and price
// input : none
// returns : {freelancer}
function getRandomFreelancer(){
  //create random numbers for each list
  const randNames = Math.floor(Math.random()*names.length);
  const randOccupations = Math.floor(Math.random()*occupations.length);
  const randPrice = Math.floor(Math.random()*startingPrice.length);

  //create a random obj using random index created
  const freelancer ={
    name : names[randNames],
    occupation : occupations[randOccupations],
    price:startingPrice[randPrice]
  }
  return freelancer;
}

//Display contents to DOM at a defined interval
const interval =setInterval(()=>{
  //get a random freelancer
  const randomFreeLancer =getRandomFreelancer();
  //add item to array
  freelancers.push(randomFreeLancer);
  //render updated array of obj to DOM
  renderContents();

  //set exit condition
  if(freelancers.length === 20)
  {
    clearInterval(interval);
  }
},1000)
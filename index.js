const names = ["Kim", "James", "Anna", "Adam", "Mike", "Sue", "Dan", "Jenn", "Pat"];
const occupations = ["Actor", "Accountant", "Dancer", "Developer", "Student","Driver", "Cashier"];

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

function init() {
const root = document.querySelector('#root');
root.innerHTML = ""
const h1 = document.createElement("h1")
h1.innerHTML = "Freelancer Forum"
root.append(h1)

const h2 = document.createElement("h2")
h2.style.color = "purple";
h2.innerHTML = `The average starting price is <span id="averagePrice">$${calcAveragePrice()}</span>.`
root.append(h2)

const h3 = document.createElement("h1")
h3.innerHTML = "Available Freelancers"
root.append(h3)

const flContainer = document.createElement("div");
flContainer.id = "flContainer"
flContainer.classList.add("freelancers");
root.append(flContainer);

render();
}


function render() {
  const container = document.querySelector("#flContainer");
  container.innerHTML = ""
    
    freelancers.forEach((freelancer)=>{
        const flDiv = document.createElement("p");
        flDiv.style.color = "blue";
        flDiv.classList.add("freelancer")
        flDiv.innerHTML = ` <span><strong>Name: </strong>${freelancer.name}</span>
                            <span><strong>Occupation: </strong>${freelancer.occupation}</span>
                            <span><strong>Starting Price: </strong>$${freelancer.price}</span>        
                          `
        container.append(flDiv);
    })
    document.querySelector("#averagePrice").textContent = `$${calcAveragePrice()}`
}

function calcAveragePrice() {
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0)
  return (total / freelancers.length).toFixed(0)
}


function addRandom() {
  const newName = names[Math.floor(Math.random() * names.length)];
  const newOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const newPrice = Math.floor(Math.random() * 100) + 30
  const newFreelancer = { name: newName, occupation: newOccupation, price: newPrice }
  freelancers.push(newFreelancer)
  render();

}

const add = setInterval(addRandom, 1300);
setTimeout(() => {
  clearInterval(add)
}, 15000);

init();

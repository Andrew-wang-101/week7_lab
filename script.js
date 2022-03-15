function Cat (name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "a cat";
  this.image = "cat.jpg";
}

function Dog (name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "a dog";
  this.image = "dog.jpg";
}

function Pig (name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "a pig";
  this.image = "pig.jpg";
}

let animals = [new Cat(), new Dog(), new Pig()];
let names = ["A","B","C","D"];


function getRandomIndex(maxIndex) {
  return parseInt(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Pig) 
  {
    return new Pig(generateRandomName(), generateRandomAge());
  }
}

function generateRandomAge() {
  return getRandomIndex(10);
}

function onLoad() {

  let animal = generateRandomAnimal();
  document.getElementById("animals").textContent = animal.name + "  " + animal.age + " years old";
  let imageTag = document.getElementById("img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}

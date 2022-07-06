//Length

let cars = ["Ford", "Fiat", "Porche", "BMW"]
// console.log (cars.length)

let morecars = ["Toyota", "Subaru", "Nissan", "Honda"]
console.log (morecars.length)

const totalcars = cars.concat(morecars)
console.log (totalcars)

let HondaIndex = totalcars.indexOf("Honda")
console.log (HondaIndex)

let fordLastIndexof = totalcars.indexOf("Ford")
console.log (fordLastIndexof)

let stringOfCars = totalcars.join()
console.log (stringOfCars)

// let carsFromSting = stringOfCars.split()
// console.log (carsFromSting)

let carsFromSting = stringOfCars.split(",",stringOfCars.length)
console.log (carsFromSting)

let carsInReverse = totalcars.reverse()
console.log (carsInReverse)

let carsInAlpha = carsInReverse.sort()
console.log (carsInAlpha)

let myPrediction = "BMW"
console.log(carsInAlpha.indexOf('yourPrediction'))

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
console.log (pets)

let reptiles = pets.slice(4,6) 
console.log (reptiles)
console.log (pets)

let removedReptiles = pets.splice(4,2)
console.log (removedReptiles)
console.log (pets)

let hamster = pets.splice(4,0,"hamster")
console.log (hamster)
console.log (pets)

let removedPet = pets.pop()
console.log (removedPet)
console.log (pets)

pets.push(removedPet)  
console.log (pets)

let NoHam = pets.shift()
console.log (NoHam)

pets.unshift("turtle")
console.log (pets)

pets.push(NoHam)


const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

numbers.forEach((num,index,array) => {
    numbers[index] = num+2
  })
  
  console.log (numbers)






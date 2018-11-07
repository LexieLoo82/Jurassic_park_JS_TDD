const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}


Park.prototype.numberOfDinos = function(){
  return this.dinosaurs.length;
};

Park.prototype.addDinos = function(dino){
  this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function(dino){
 const indexOfDino = this.dinosaurs.indexOf(dino);
 this.dinosaurs.splice(indexOfDino, 1)
};

Park.prototype.mostVisited = function () {
  const dinosSortedByVisitors = this.dinosaurs.sort(function(a,b){
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;}
  );

  return dinosSortedByVisitors[0]
};

Park.prototype.dinosByType = function(){
  const dinosSortedBySpecies = this.dinosaurs.filter(function(type){
    if (dinosaur.species === type)
    return dinosSortedBySpecies
  });


}

module.exports = Park;

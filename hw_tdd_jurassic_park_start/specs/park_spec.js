const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function(){
    park = new Park('Jurassic Park', 15);
    dino1 = new Dinosaur('t-Rex', 'carnivore', 50);
    dino2 = new Dinosaur('Mammoth', 'herbavore', 75);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinos();
    assert.strictEqual(actual, 0)
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinos(dino1)
    const actual = park.numberOfDinos();
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.removeDino(dino1);
    const expected = [dino2];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected)
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    const expected = dino2;
    const actual = park.mostVisited();
    assert.deepStrictEqual(actual, expected)
  });

 it('should be able to find all dinosaurs of a particular species', function(){
   park.addDinos(dino1);
   park.addDinos(dino2);
   const expected = dino2;
   const actual = park.dinosByType();
   assert.deepStrictEqual(actual, expected)
 });
  //
  // it('should be able to remove all dinosaurs of a particular species');

});

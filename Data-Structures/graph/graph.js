class PersonNodee {
  constructor(name, adjacent = new Set()) {
    this.name = name;
    this.adjacent = adjacent;
  }
}

class FriendGraph {
  constructor() {
    this.nodes = new Set();
  }
  addPerson(node) {
    this.nodes.add(node);
  }
  addPeople(peopleList) {
    for (const node of peopleList) {
      this.addPerson(node);
    }
  }
  setFriends(p1, p2) {
    p1.adjacent.add(p2);
    p2.adjacent.add(p1);
  }

  // BFS using a queue, shift()
  areConnected(p1, p2) {
    let toVisitQueue = [p1];
    let seen = new Set(toVisitQueue);
    while (toVisitQueue.length) {
      let currPerson = toVisitQueue.shift();
      if (currPerson === p2) return true;
      for (const neighbor of currPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }
}

const homer = new PersonNodee("Homer Simpson");
const marge = new PersonNodee("Marge Simpson");
const magie = new PersonNodee("Magie Simpson");
const lisa = new PersonNodee("Lisa Simpson");
const grampa = new PersonNodee("Grampa Simpson");

const moe = new PersonNodee("Moe");
const barney = new PersonNodee("Barney");
const lenny = new PersonNodee("Lenny");

const friends = new FriendGraph();
friends.addPeople([homer, marge, magie, lisa, grampa]);
friends.setFriends(homer, marge);
friends.setFriends(homer, lisa);
friends.setFriends(homer, magie);
friends.setFriends(marge, magie);
friends.setFriends(magie, lisa);
friends.setFriends(lisa, grampa);
friends.addPeople([moe, barney, lenny]);
friends.setFriends(moe, barney);
friends.setFriends(barney, lenny);

// console.log(friends);
// for (const f of friends.nodes) {
//   console.log(f);
// }
console.log(friends.areConnected(homer, lisa));

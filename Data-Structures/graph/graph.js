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
}

const homer = new PersonNodee("Homer Simpson");
const marge = new PersonNodee("Marge Simpson");
const magie = new PersonNodee("Magie Simpson");
const lisa = new PersonNodee("Lisa Simpson");
const grampa = new PersonNodee("Grampa Simpson");

const friends = new FriendGraph();
friends.addPeople([homer, marge, magie, lisa, grampa]);
friends.setFriends(homer, marge);
friends.setFriends(homer, lisa);
friends.setFriends(homer, magie);
friends.setFriends(marge, magie);
friends.setFriends(magie, lisa);
friends.setFriends(lisa, grampa);

// console.log(friends);
for (const f of friends.nodes) {
  console.log(f);
}


class Player {
    constructor(name, gender, element, classType, abilities, PlayerLevel, stats) {
        this.name = name;
        this.gender = gender;
        this.element = element;
        this.classType = classType;
        this.abilities = abilities;
        this.PlayerLever = PlayerLevel;
        this.stats = stats;
    }

    printDetails(){
    console.log();
    console.log(`"Name: "${this.name}`);
    console.log(`${this.gender}`);
    console.log(`${this.element}`);
    console.log(`${this.classType}`);
    console.log(`${this.abilities}`);
    console.log(`${this.PlayerLever}`);
    console.log(`${this.stats}`);
    console.log();
    }

}

let playerOne = new Player("mark","male","wind","rouge","steal","59", "9999");

console.log(playerOne);
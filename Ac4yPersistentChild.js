class Ac4yPersistentChild extends Ac4yPersistent 
{ 
    constructor(object) 
    {
        super(object);
        this.name = name;

        this.ages = ages;

        this.id = id;

        this.gUID = gUID;

        this.owner = owner;

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;

        this.ac4yIdentification = ac4yIdentification;
    }
} // Ac4yPersistentChild

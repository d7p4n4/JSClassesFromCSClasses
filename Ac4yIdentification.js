class Ac4yIdentification extends Ac4yIdentificationBase 
{ 
    constructor(object) 
    {
        super(object);
        this.ac4yIdentificationBase = ac4yIdentificationBase;

        this.id = id;

        this.gUID = gUID;

        this.humanId = humanId;

        this.publicHumanId = publicHumanId;

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;
    }
} // Ac4yIdentification

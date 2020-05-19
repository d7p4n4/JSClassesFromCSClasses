
class Ac4yPersistentChildObjectService
{
    class GetListResponse extends Ac4yServiceResponse
    {
        constructor(object){
            super(object);
            this.ac4yPersistentChilds = ac4yPersistentChilds;
        }
    }

    class GetListRequest extends Ac4yServiceRequest
    {

    }
    
    class GetByIdRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.id = id;
        }
    }

    class GetByIdResponse extends Ac4yServiceResponse
    {
        constructor(object){
            super(object);
            this.ac4yPersistentChild = ac4yPersistentChild;
        }
    }

    class GetByGuidRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.guid = guid;
        }
    }

    class GetByGuidResponse extends Ac4yServiceResponse
    {
        constructor(object){
            super(object);
            this.ac4yPersistentChild = ac4yPersistentChild;
        }
    }

    class IsExistByIdRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.id = id;
        }
    }

    class IsExistByIdResponse extends Ac4yServiceResponse {}

    class IsExistByGuidRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.guid = guid;
        }
    }

    class IsExistByGuidResponse extends Ac4yServiceResponse {}

    class UpdateByIdRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.id = id;
            this.ac4yPersistentChild = ac4yPersistentChild;
        }
    }

    class UpdateByIdResponse extends Ac4yServiceResponse {}

    class UpdateByGuidRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.guid = guid;
            this.ac4yPersistentChild = ac4yPersistentChild;
        }
    }

    class UpdateByGuidResponse extends Ac4yServiceResponse {}

    class InsertRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.ac4yPersistentChild = ac4yPersistentChild;
        }
    }

    class InsertResponse extends Ac4yServiceResponse {}

    class SetByGuidRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.guid = guid;
            this.ac4yPersistentChild = ac4yPersistentChild;
        }
    }

    class SetByGuidResponse extends Ac4yServiceResponse {}

    class DeleteByIdResponse extends Ac4yServiceResponse
    {

    }

    class DeleteByIdRequest extends Ac4yServiceRequest
    {
        constructor(object){
            super(object);
            this.id = id;
        }
    }

} // Ac4yPersistentChildObjectService

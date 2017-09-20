///<reference path="../../com/dynomike/core/Model.ts"/>

module com.dynomike {
    export class PlayerModel extends com.dynomike.Model{

        public playerID: string;

        constructor() {
            super();
            console.log('PlayerModel class instantiated');
        }
    }
} 
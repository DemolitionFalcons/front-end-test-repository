export class CreateGameModel {
    constructor(
        public name: string,
        public map: string,
        public maxPlayers: number
    ) { }
}

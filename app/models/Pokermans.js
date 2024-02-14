export class Pokeman {

    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName || ''
        this.types = data.type
        this.img = data.sprites
    }

    get SelectablePokemanBox() {
        return `
        <div class="col-3 card shadow border border-dark p-3 text-center">
            <img class="card-img-top" src="holder.js/100px180/" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">Bulbasaur</h4>
                <p class="card-text">Grass</p>
            </div>
        </div> 
        `
    }
}
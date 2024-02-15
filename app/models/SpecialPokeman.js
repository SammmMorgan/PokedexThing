export class SpecialPokemon {


    constructor(data) {
        // debugger
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        this.nickname = data.nickname || ''
        this.types = data.types
        this.img = data.sprites
    }


    get depthInfoForPokemon() {
        return `
        <section class="row">
            <div class="col-12">
                <div class="card text-center">
                    <img class="card-img-top" src="holder.js/100px180/" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">${this.name}</h4>
                        <h3 class="card-text">Type: Grass</h3>
                        <h3 class="card-text">Ability: Overgrowth</h3>
                        <p class="card-text">Bulbasaur is my baby boy</p>
                    </div>
                </div>

            </div>
        </section>
        `
    }


    get
}

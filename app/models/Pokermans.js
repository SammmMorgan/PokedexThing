export class Pokeman {

    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName || ''
        this.types = data.type || ''
        this.img = data.url
    }

    get SelectablePokemanBox() {
        return `
        <div onclick="app.PokeController.pullDepthInfo('${this.name}')" role="button" class="col-4 card shadow border border-dark p-3 text-center">
            <img class="card-img-top" src="${this.img}" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">${this.name}</h4>
                <p class="card-text">Grass</p>
            </div>
        </div> 
        `
    }
}
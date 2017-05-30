var Part = (function () {
    function Part(row, column) {
        var _this = this;
        var div = document.createElement("div");
        document.body.appendChild(div);
        this.allowed = Math.round(Math.random());
        div.className = (this.allowed) ? "filledpart" : "brokenpart";
        this.row = row;
        this.column = column;
        this.x = column * 125;
        this.y = row * 100;
        div.addEventListener("click", function () { return _this.partClicked(); });
        div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Part.prototype.partClicked = function () {
        console.log("row: " + this.row + " column: " + this.column);
    };
    return Part;
}());
var Game = (function () {
    function Game() {
        for (var row = 0; row < 4; row++) {
            for (var column = 0; column < 3; column++) {
                var p = new Part(row, column);
            }
        }
    }
    return Game;
}());
var g = new Game();
//# sourceMappingURL=main.js.map
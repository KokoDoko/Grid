class Part {

    private column:number;
    private row:number;
    private allowed:number;
    private x:number;
    private y:number;

    constructor(row:number, column:number){
      let div = document.createElement("div");
      document.body.appendChild(div);

      this.allowed = Math.round(Math.random());
      div.className = (this.allowed) ? "filledpart" : "brokenpart";

      this.row = row;
      this.column = column;
      
      this.x = column * 125;
      this.y = row * 100;

      div.addEventListener("click", ()=>this.partClicked());

      div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public partClicked(){
      console.log("row: " + this.row + " column: " + this.column);
    }
}

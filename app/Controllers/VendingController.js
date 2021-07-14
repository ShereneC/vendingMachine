import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";


//Private
function _draw() {
  let credit = ProxyState.money
  let change = ProxyState.change
  // let template = ''
  // values.forEach(v => template += v.Template)
  document.getElementById("credit").innerHTML = credit.toString()
  document.getElementById("change").innerHTML = change.toString()
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.vendingController.addQuarter()">Add Money</button>  

  `
}

//Public
export default class VendingController {
  constructor() {
    ProxyState.on("money", _draw);
    _draw()
  }

  addQuarter() {
    vendingService.addQuarter()
  }

  giveChange(name) {
    vendingService.giveChange(name)
  }

}

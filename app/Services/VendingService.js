import { ProxyState } from "../AppState.js";

class VendingService {
  addQuarter() {
    ProxyState.money += .25
    console.log(ProxyState.money)
  }

  giveChange(name) {
    ProxyState.change = ProxyState.money - ProxyState.snack[name].price
    ProxyState.money = 0
    console.log(ProxyState.change)
  }
}

export const vendingService = new VendingService();


import { ProxyState } from "../AppState.js";

class VendingService {
  addQuarter() {
    ProxyState.money += .25
    console.log(ProxyState.money)
  }

  giveChange() {
    ProxyState.change = ProxyState.money - 1
    ProxyState.money -= ProxyState.change
    console.log(ProxyState.change)
  }
}

export const vendingService = new VendingService();


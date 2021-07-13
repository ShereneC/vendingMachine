import { ProxyState } from "../AppState.js";

class VendingService {
  addQuarter() {
    ProxyState.money += .25
    console.log(ProxyState.money)
  }
}

export const vendingService = new VendingService();


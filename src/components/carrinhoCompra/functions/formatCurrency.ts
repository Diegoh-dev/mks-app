export function formatCurrency(value: string | number) {
  let dinheiro: any;
  if (typeof value == "string") {
    dinheiro = value.replace(".", ",");
  } else {
    dinheiro = String(value).replace(".", ",");
  }

  if (dinheiro.indexOf(",") == -1) {
    dinheiro = dinheiro + ",00";
  } else {
    if (dinheiro.split(",")[1].length == 1) {
      dinheiro = dinheiro + "0";
    }
    if (dinheiro.split(",")[1].length > 2) {
      dinheiro =
        dinheiro.split(",")[0] + "," + dinheiro.split(",")[1].slice(0, 2);
    }
  }

  return dinheiro;
}

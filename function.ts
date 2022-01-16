
// パラメータの型はnum1:stringと記述
// 戻り値の型はパラメータの後ろに記述
// 型推論に関して・・・
// 戻り値には対応（型を省略してもよい）
// パラメータの方には型推論は非対応（つまり型の記述が必須）
// ちなみにパラメータに型を書かないとanyとして判断されるよ
// function add(num1:number, num2:number):number{
//   return num1 + num2
// }

// console.log(add(1,3));

function good(): void {
  console.log("hii");
}

console.log(good());
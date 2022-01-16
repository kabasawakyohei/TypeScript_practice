const apple:"apple" = "apple";

// constで定義すると型推論はリテラル型になる
// const apple = "apple";

// letは何度でも書き換えれるので型推論はstring型になる
let orange = "orange";

// まとめ
// const を採用するとリテラル型
// let を採用するとString, number,
// boolean などなどに型推論される

// リテラル型とユニオン型を使った例
// let clothSize: 'small' | 'medium' | 'large' = 'medium';
// const cloth: {
//   color: string,
//   size: 'small' | 'medium' | 'large'
// } =  {
//   color: 'black',
//   size: 'small'
// }

// typeエイリアスを使ってみる
// 型の変数名みたいなもの
type ClothSize = 'small' | 'medium' | 'large'
let clothSize: ClothSize = 'medium';
const cloth: {
  color: string,
  size: ClothSize
} =  {
  color: 'black',
  size: 'large'
}
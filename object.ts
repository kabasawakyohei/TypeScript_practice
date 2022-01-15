const person:{
  name:string,
  age:number
} = {
  name:"kyohei",
  age:28
}
console.log(person.name);

// Typeエイリアスを使うとUnionで複数の型を許容するように宣言していたのを型一覧を変数（あだ名）のようにして使用できる
type alias = string | number | boolean

//Union型 指定した型を許容する
const test : alias = 1;


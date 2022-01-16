class Person{
  // nameフィールド
  name: string
  age: number;
  // オブジェクトを作る際に一番最初に走る処理
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hi,My name is ${this.name}.I am ${this.age} years old.`);
  }

}
let person2 :Person;
const kabasawa = new Person("kyohei", 28);
kabasawa.incrementAge();
kabasawa.greeting();



// thisはオブジェクト{anotherGreeting: kabasawa.greeting}を示している
// thisはクラスの中で使った時にはクラスのインスタンスそのものを表す
// オブジェクトの中のメソッドでthisを使った時はthisはオブジェクトそのものを指し示す
// 今回で言うとthis.nameは{anotherGreeting: kabasawa.greeting}上にはないのでname: "山田さん"を追加してあげればthis.nameを参照できる
// const anotherKabasawa = {
//   name: "山田さん",
//   anotherGreeting: kabasawa.greeting
// }

// anotherKabasawa.anotherGreeting();

// 注意
// thisは定義した時ではなくて呼び出された時のプロパティで決まる！！

// TypeScriptはanotherGreeting: kabasawa.greeting のgreetingメソッドの中身でどんな処理が行われているかまでは見れない
// メソッドの中身まで面倒見て欲しければ呼び出されるメソッドの引数にthis（偽物のパラメータを渡す）
// するとgreetingの中でthisが使われていてthisというものはstring型のnameプロパティを持つ必要があるね。と理解できる。

// greeting(this: { name: string }) {
//   console.log(`Hi,My name is ${this.name}`);
// }
// のようにthisはインスタンスを表しているわけでもしプロパティにname以外のなにかが追加されたらthis: { name: string , age: number ...}などかなり冗長になってしまう。
// これを無くすために以下のようにPersonクラスのPersonを型として定義する
// greeting(this: Person) {
//   console.log(`Hi,My name is ${this.name}`);
// }

// let person2 :Person;

// ！！！！classを作るということはオブジェクトを作る。という以外に
// そのクラスが作り出すインスタンス(kabasawaです)を表す型というのも同時に作っている！！！


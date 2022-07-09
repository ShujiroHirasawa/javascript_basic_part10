//1
var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits[0]);
console.log(fruits[2]);

/*2
・key
➞オブジェクトを作成するとき、例えば「name: "太郎",」を書いた場合、この「name」にあたる部分のことをkeyと言う。

・value
➞オブジェクトを作成するとき、例えば「name: "太郎",」を書いた場合、この「太郎」にあたる部分のことをvalueと言う。

・プロパティ
➞上記のkeyとvalueを合わせた名称をプロパティーと言う。
*/

//3
var teacher = {
  name: "太郎",
  age: 25,
  subject: "国語",
}
console.log(teacher);

//4
var teachers = [
  {
    name: "太郎",
    age: 25,
    subject: "国語",
  },
  {
    name: "浩司",
    age: 30,
    subject: "数学",
  },
  {
    name: "花子",
    age: 26,
    subject: "社会",
  }
]
console.log(teachers[0].name);
console.log(teachers[2].subject);
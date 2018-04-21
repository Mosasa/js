function Person(name){
    this.name=name;
}
Person.prototype.getName=function(){
    return this.name;
}


//IT工程师
// extend(继承) Person
function Coder(name,languages){
    //call的用法
    Person.call(this,name);
    //继承后,父类(Person类)里没有的可以另加
    this.languages=languages;
}
// new Person新的对象就是Coder的原型prototype对象
Coder.prototype=new Person();
Coder.prototype.construtor=Coder;
Coder.prototype.getLanguages=function(){
    console.log(this.languages);//return this.languages
}


var wxf=new Person('汪西发');//实例化并传入一个实参
console.log(wxf.name);

var xjy=new Coder('徐加元',['javascript','python','c/c++']);
console.log(xjy.name+''+xjy.languages.join(','));
console.log(xjy.getName());
console.log(xjy.getLanguages());
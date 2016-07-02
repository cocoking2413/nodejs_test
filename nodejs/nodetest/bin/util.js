/**
 * Created by Administrator on 2016-06-29.
 */
var util=require("util");
function Base(){
    this.name="Base";
    this.base=1991;
    this.sayHello=function(){
        console.log('hello '+this.name);
    };
}
Base.prototype.base=1992;
Base.prototype.showName=function(){
  console.log(this.name);
};
Base.prototype.showBase=function(){
    console.log(this.base);
};
function Sub(){
    this.name='Sub';
}
util.inherits(Sub,Base);
var objBase=new Base();
objBase.showName();
objBase.showBase();
objBase.sayHello();
console.log(objBase);

var objSub=new Sub();
objSub.showName();
objSub.showBase();
//objSub.sayHello();
console.log(objSub);

console.log(util.inspect(objBase,true,null,true));

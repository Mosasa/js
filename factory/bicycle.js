console.log('工厂模式');
// 函数属于对象
// 函数是一等对象
// 类,简单的只有一个构造函数
// 类跟函数没有区别
//js本身并没有类,只是用的人多了,给了这个实现
//js 只有对象 Object原型对象的始祖
// 原型 prototype
// js中不需要传统继承,只需要一个参照物就可实现原型式继承
var Bicycle=function(brand){ //对象:自行车类
 //构造函数 constructor
 //new 时执行
 //this指向new的对象
 this.brand=brand || '凤凰'
}
// 原型凤凰单车
 // |
// 二维码
// 手机支付
//js 继承关系
//共享单车,颠覆了自行车
Bicycle.prototype={
    sellBicycle:function(model){
        // console.log('卖车了...');
        // return null;
        // 面向对象(们):卖车,商店,很多车,维修人员,仓库人员, (工厂模式)
        var bicycle=null;
        switch(model){
            case 'Giant':
              bicycle=new Giant();//将从Giant类中取出一个实例(从车库中取出一辆车)
            break;
            case 'The Speed ster':
              bicycle=new Speedster();
            break;
            case 'U2':
              bicycle=new U2();
            break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        return bicycle;
    }
}
// js 基本类型
// 字符串,数字,布尔值,undefined,null
// 复杂类型  object <-prototype array function json

function Speedster(){//对象:某部车型--雷速达   
}
Speedster.prototype={//对象的原型链
    assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },//每个对象元素间用逗号(,)分隔
      provideRepair: function() {
        console.log('保修三年');
      }    
}
function Giant(){//对象:某部车型--捷安特
}
Giant.prototype={//对象的原型链
    assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },//每个对象元素间用逗号(,)分隔
      provideRepair: function() {
        console.log('保修三年');
      }    
}
function U2(){
}
U2.prototype={
    assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },//每个对象元素间用逗号(,)分隔
      provideRepair: function() {
        console.log('保修三年');
      }    
}
var bicycle=new Bicycle();//1.执行了构造函数,2.创建新实例
console.log(bicycle.sellBicycle('U2'));
+function(){
    window.Zidan = function(){
        // console.log(123)
        this.idx =0
        this.jiasu =1
        // console.log(game)
        this.random = _.random(5,game.w*1.8)
        game.arr.push(this)
    }
    Zidan.prototype.render = function(){
        game.ctx.beginPath();
        // game.ctx.fillRect(this.random + -this.idx,this.idx,5,5) 原方块
        game.ctx.arc(this.random + -this.idx,this.idx,3,Math.PI*2,false)
        game.ctx.fillStyle = "#fff"
        game.ctx.fill()
        game.ctx.stroke()
        if(this.random + -this.idx ==0) game.arr.splice(game.arr.indexOf(this),1)
        if(this.idx>game.h) game.arr.splice(game.arr.indexOf(this),1)
    }
    Zidan.prototype.updata = function(){
        this.zdx= this.random + -this.idx
        this.zdy = this.idx
        this.idx+=this.jiasu    
        if(game.qiu >2000)  {this.jiasu = 1.4;  game.fenshu = game.qiu*1.1}
        if(game.qiu >3000)  {this.jiasu = 1.6;  game.fenshu = game.qiu*1.2}
        if(game.qiu >4000)  {this.jiasu = 1.8; game.fenshu = game.qiu*1.3}
        if(game.qiu >5000)  {this.jiasu = 2;    game.fenshu = game.qiu*1.4}       
        if(game.qiu >6000)  {this.jiasu = 2.2;  game.fenshu = game.qiu*1.5}
        if(game.qiu >7000)  {this.jiasu = 2.4;  game.fenshu = game.qiu*1.6}
        if(game.qiu >8000)  {this.jiasu = 2.6;  game.fenshu = game.qiu*1.7}
        if(game.qiu >9000)  {this.jiasu = 2.8;  game.fenshu = game.qiu*1.8}
        if(game.qiu >10000) {
            game.kaiguan =3
        }      
        // this}.jiasu+=0.003
       
       
        // if(this.random + -this.idx <0) game.arr.splice(arr.indexOf(this),1)
    }
    Zidan.prototype.godie = function(){
        
        //game.x-4,game.y-4 小球x 小球y
        this.xqx1 = game.x+7
        this.xqx2 = game.x-7
        this.xqy1 = game.y+7
        this.xqy2 = game.y-7
        if(this.xqx2<this.zdx && this.zdx<this.xqx1 && this.xqy2<this.zdy && this.zdy < this.xqy1) {
           game.kaiguan = 2
            
        }
    }
}()
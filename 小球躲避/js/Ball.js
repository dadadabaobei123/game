+function(){
    window.Ball = function(){
        
    }
    Ball.prototype.render = function(){
        // console.log(game.x ,game.y)
        game.ctx.beginPath();
        // game.ctx.fillRect(this.random + -this.idx,this.idx,5,5)
        game.ctx.arc(game.x,game.y,8,Math.PI*2,false)
        game.ctx.fillStyle = "skyblue"
        game.ctx.fill()
        game.ctx.stroke()
        // game.ctx.fillRect(game.x-8,game.y-8,16,16)
    }
    Ball.prototype.keydown = function(){
        game.ctx.beginPath();
        // game.ctx.fillRect(this.random + -this.idx,this.idx,5,5)
        game.ctx.arc(game.x,game.y,8,Math.PI*2,false)
        game.ctx.fillStyle = "rgb("+_.random(0,255)+","+_.random(0,255)+","+_.random(0,255)+")"
        game.ctx.fill()
        game.ctx.stroke()
    }
}()
+function(){
    window.Bg = function(){
        this.img   = new Image
        this.img.src = "./img/01.png"
        this.img.onload = function(){
           game.ctx.drawImage(this.img,0,0,this.w,this.h,0,0,this.w,this.h)
        }
    }
}()
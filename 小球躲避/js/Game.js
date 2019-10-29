+function(){
    window.Game = function(){
        var self = this
        this.arr= []
        this.fram = 0
        this.qiu = 0
        this.suo = 0 //锁 键盘事件
        this.suohaha =0 // 锁 技能的时间
        this.suodada =0 // 锁 每隔多少秒给一次技能
        this.kaiguan=0
        this.life = 0
        this.fenshu = this.qiu
        this.canvas = document.querySelector("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.w = 800 //屏幕宽
        this.h = 600 // 屏幕高
        this.p1 = document.querySelector(".p1")
        this.p2 = document.querySelector(".p2")
        this.p3 = document.querySelector(".p3")
        this.canvas.width = this.w //画布宽
        this.canvas.height = this.h//画布高
        this.x = 0;
        this.y = 0;
        this.miao=0
        this.ball = new Ball
        //
        //
        this.click()
        // console.log(this)
       
    }
    Game.prototype.move = function(){
        var self= this
        this.canvas.onmousemove = function(){
            self.x = event.clientX-300;
            self.y = event.clientY-50;
            // console.log(this)
            // console.log(self.x,self.y)
            // console.log(this.ball)
        }
    }
    Game.prototype.keydown= function(){
        var self = this
        document.onkeydown = function(e){
            if(e.keyCode==32){
                
                self.suo =1
                self.suodada = self.suodada -1300
            }
        }
    }
    Game.prototype.click = function(){
        var self = this
        this.canvas.onclick = function(){
            self.life +=1 
            self.kaiguan =1
            window.mp3.play()
            
            
        }
    }

        setInterval(function(){
            var self = this.game
            
            // console.log(self.kaiguan)
            if(self.kaiguan==0) {
                self.ctx.font = "40px Arial"
                if(self.qiu%4000 == 0){
                self.ctx.fillStyle = "#aaa"
                //"rgb("+_.random(0,255)+","+_.random(0,255)+","+_.random(0,255)+")"
                }
                self.ctx.fillText("点击任意位置开始游戏",200,200)
                self.ctx.font = "20px Arial"
                self.ctx.fillText("·蓝色小球会跟随鼠标移动",250,250)
                self.ctx.fillText("·存活时间越长分数越高",250,275)
                self.ctx.fillText("·空格释放技能无敌三秒",250,300)
                self.ctx.fillText("·每隔13秒装填一次技能",250,325)
                self.ctx.fillText("·随着时间加移小球速度会越来越快",250,350)
                return
            }
            if(self.kaiguan==1){
                self.ctx.clearRect(0,0,self.w,self.h) //清屏
                self.suodada++  //计算锁的时间
                self.fenshu = self.qiu
                if(self.suodada >1300)self.keydown() //当13秒以后就可以摁空格
                if(self.suo == 1){  //摁空格触发效果
                    self.ball.keydown()
                    self.suohaha++  //无敌时间累加
                    if(self.suohaha>300){ //无敌时间3s 
                        self.suo=0
                        self.suohaha =0  //无敌时间归零
                    }
                    for(var i=0; i<self.arr.length;i++){
                        self.arr[i].render() //小球渲染
                        self.arr[i].updata() // 小球移动
                        // self.arr[i].godie() //判断死亡
                    }
                }else{
                    self.ball.render()  //渲染人物
                    for(var i=0; i<self.arr.length;i++){
                        self.arr[i].render() //小球渲染
                        self.arr[i].updata() // 小球移动
                        self.arr[i].godie() //判断死亡
                    }
                }
                self.move()         //鼠标移动
                //累加数
                self.qiu++
                self.miao = parseFloat(self.qiu/100)
                self.ctx.font = "20px Arial"
                self.ctx.fillStyle = "#679"
                self.ctx.fillText("存活时间:"+self.miao,0,20)
                self.ctx.fillText("分数:"+parseInt(self.fenshu+self.miao),0,40)
                var jineng = parseInt(self.suodada/1300)
                self.ctx.fillText( "技能次数:"+jineng,0,60)
                if(self.qiu%4 == 0)new Zidan; //每隔一段时间new一个 小球
                return
            }
            if(self.kaiguan==2){
                
                self.ctx.font = "40px Arial"
                self.ctx.fillStyle = "#ddd"
                self.ctx.fillText("You Die",300,200)
                self.ctx.fillText("点击继续游戏",260,300)
                self.ctx.fillText("请点到相对安全的地方复活",160,400)
                self.ctx.fillText("死亡次数:"+self.life,300,500)
                return
            }
            if(self.kaiguan==3){
                var num = self.life-1
                self.ctx.font = "40px Arial"
                self.ctx.fillStyle = "#ddd"
                self.ctx.fillText("You Wie",300,150)
                self.ctx.fillText("存活时间:"+self.miao,260,250)
                self.ctx.fillText("分数:"+parseInt(self.fenshu+self.miao),300,350)
                self.ctx.fillText("死亡次数:"+num,300,450)
                if(self.life<2){
                    self.ctx.fillText("解锁段位：最强王者",220,550)
                }else if(self.life<4){
                    self.ctx.fillText("解锁段位：璀璨钻石",220,550)
                }else if(self.life<6){
                    self.ctx.fillText("解锁段位：华贵铂金",220,550)
                }else if(self.life<8){
                    self.ctx.fillText("解锁段位：荣耀黄金",220,550)
                }else if(self.life<10){
                    self.ctx.fillText("解锁段位：不屈白银",220,550)
                }else if(self.life<100){
                    self.ctx.fillText("解锁成就：无畏青铜",220,550)
                }
               
                return
            }
            
        },10)

}()
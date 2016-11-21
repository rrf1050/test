//console.log(Math.pow(2,0.5));
$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});
// グローバルに展開
phina.globalize();
// 定数
//window.onerror = function (msg, file, line, column, err) {
    /*
    msg: error message
    file: file path
    line: row number
    column: column number
    err: error object
    */ 
//    alert(msg + file + ':' + line);
//};
var ASSETS = {
  image: {
    bg25: "https://rawgit.com/rrf1050/test/master/graphic/haikei25.png",
    yukari_legacy: "https://rawgit.com/rrf1050/test/master/graphic/yukari25_c16_4bit.png",
    yukari_origin: "https://rawgit.com/rrf1050/test/master/graphic/yukari25_master_master_6bit_origin.png",
    cursor_up: "https://rawgit.com/rrf1050/test/master/graphic/cursor/cursor_up.png",
    cursor_down: "https://rawgit.com/rrf1050/test/master/graphic/cursor/cursor_down.png",
    back: "https://rawgit.com/rrf1050/test/master/graphic/surface/Back.png",
    charactor: "https://rawgit.com/rrf1050/test/master/graphic/surface/charactor.png",
    color: "https://rawgit.com/rrf1050/test/master/graphic/surface/Color.png",
    entry: "https://rawgit.com/rrf1050/test/master/graphic/surface/Entry.png",
    c_maki: "https://rawgit.com/rrf1050/test/master/graphic/surface/Maki.png",
    c_yukari: "https://rawgit.com/rrf1050/test/master/graphic/surface/Yukari.png",
    settings: "https://rawgit.com/rrf1050/test/master/graphic/surface/Settings.png",
    title: "https://rawgit.com/rrf1050/test/master/graphic/surface/title.png",
    exit: "https://rawgit.com/rrf1050/test/master/graphic/surface/Exit.png",
    origin: "https://rawgit.com/rrf1050/test/master/graphic/surface/Origin.png",
    legacy: "https://rawgit.com/rrf1050/test/master/graphic/surface/Legacy.png",
    white: "https://rawgit.com/rrf1050/test/master/graphic/surface/White.png",
    
    ready: "https://rawgit.com/rrf1050/test/master/graphic/decolate/Ready.png",
    fight: "https://rawgit.com/rrf1050/test/master/graphic/decolate/Fight.png",
  },
	spritesheet: {
		"yukari_legacy_ss":"https://rawgit.com/rrf1050/test/master/ss/yukari25_c16.json",
		"yukari_origin_ss":"https://rawgit.com/rrf1050/test/master/ss/yukari25_master.json",
	},
	json: {
	  hantei0: 'https://rawgit.com/rrf1050/test/master/hantei/backstep/backstephantei.txt.json',
	  hantei1: 'https://rawgit.com/rrf1050/test/master/hantei/backwalk/backwalkhantei.txt.json',
	  hantei2: 'https://rawgit.com/rrf1050/test/master/hantei/counterdamage/counterdamagehantei.txt.json',
	  hantei3: 'https://rawgit.com/rrf1050/test/master/hantei/damage/damagehantei.txt.json',
	  hantei4: 'https://rawgit.com/rrf1050/test/master/hantei/dash/dashhantei.txt.json',
	  hantei5: 'https://rawgit.com/rrf1050/test/master/hantei/down/downhantei.txt.json',
	  hantei6: 'https://rawgit.com/rrf1050/test/master/hantei/idol/idolhantei.txt.json',
	  hantei7: 'https://rawgit.com/rrf1050/test/master/hantei/jdamage/jdamagehantei.txt.json',
	  hantei8: 'https://rawgit.com/rrf1050/test/master/hantei/jrslash/jrslashhantei.txt.json',
	  hantei9: 'https://rawgit.com/rrf1050/test/master/hantei/jslash/jslashhantei.txt.json',
	  hantei10: 'https://rawgit.com/rrf1050/test/master/hantei/jump/jumphantei.txt.json',
	  hantei11: 'https://rawgit.com/rrf1050/test/master/hantei/sdamage/sdamagehantei.txt.json',
	  hantei12: 'https://rawgit.com/rrf1050/test/master/hantei/shirimochi/shirimochihantei.txt.json',
	  hantei13: 'https://rawgit.com/rrf1050/test/master/hantei/sit/sithantei.txt.json',
	  hantei14: 'https://rawgit.com/rrf1050/test/master/hantei/slash1/slashhantei.txt.json',
	  hantei15: 'https://rawgit.com/rrf1050/test/master/hantei/sslash/sslashhantei.txt.json',
	  hantei16: 'https://rawgit.com/rrf1050/test/master/hantei/wakeup/wakeuphantei.txt.json',
	  hantei17: 'https://rawgit.com/rrf1050/test/master/hantei/walk/walkhantei.txt.json',
	  hantei18: 'https://rawgit.com/rrf1050/test/master/hantei/winpose/winposehantei.txt.json',
	  hantei19: 'https://rawgit.com/rrf1050/test/master/hantei/wintoidol/wintoidolhantei.txt.json',
	  hantei20: 'https://rawgit.com/rrf1050/test/master/hantei/backwalkbegin/backwalkbeginhantei.txt.json',
	  hantei21: 'https://rawgit.com/rrf1050/test/master/hantei/walkbegin/walkbeginhantei.txt.json',
	  hantei22: 'https://rawgit.com/rrf1050/test/master/hantei/standup/standuphantei.txt.json',
	  hantei23: 'https://rawgit.com/rrf1050/test/master/hantei/sitdown/sitdownhantei.txt.json',
	  hantei24: 'https://rawgit.com/rrf1050/test/master/hantei/jdamage_keep/jdamage_keephantei.txt.json',
	},
	sound: {
	  cancel: 'https://rawgit.com/rrf1050/test/master/se/cancel.wav',
	  chit: 'https://rawgit.com/rrf1050/test/master/se/chit.wav',
	  cursor: 'https://rawgit.com/rrf1050/test/master/se/cursor.wav',
	  enter: 'https://rawgit.com/rrf1050/test/master/se/enter.wav',
	  fight: 'https://rawgit.com/rrf1050/test/master/se/fight.wav',
	  jhit: 'https://rawgit.com/rrf1050/test/master/se/jhit.wav',
	  karaburi: 'https://rawgit.com/rrf1050/test/master/se/karaburi.wav',
	  sousai: 'https://rawgit.com/rrf1050/test/master/se/metal.wav',
	  ready: 'https://rawgit.com/rrf1050/test/master/se/ready.wav',
	  slash: 'https://rawgit.com/rrf1050/test/master/se/slash.wav',
	  todome: 'https://rawgit.com/rrf1050/test/master/se/todome.wav',
	}
};

var FOUR = 4;
var SCREEN_WIDTH  = 960/FOUR;              // スクリーン幅
var SCREEN_HEIGHT = 540/FOUR;              // スクリーン高さ
var SPEED         = 10;


phina.define("GameInput",{
  init: function(){
    this.a=false;
    this.b=false;
    this.left=false;
    this.right=false;
    this.up=false;
    this.down=false;
  }
});
phina.define("GameConsole",{
  
  init: function(name,parentname,elements,owner,x,controlobj){
    var y = 110;
    var y_offset = 12;
    
    this.controlobj = controlobj;
    this.keyqueue=[];
    this.name = name;
    this.parentname = parentname;
    this.elements = elements;
    this.objects = [];
    this.owner = owner;
    this.parent = DisplayElement().addChildTo(owner);
    this.parent.clip = function(canvas){
      canvas.beginPath();
      canvas.rect(x-25,102,52,25);
    };
    this.list = DisplayElement().addChildTo(this.parent);
    this.dummy = DisplayElement().addChildTo(this.list);
    this.dummy.origin.set(0.5,0);
    this.dummy.x=x;
    this.dummy.y=102;
    this.dummy.width=52;
    this.dummy.height=25;
    
    this.dummy.enterflag=false;
    this.dummy.upflag=false;
    this.dummy.downflag=false;
    
    if(this.name != "entry"){
      Math.floor(5/elements.length+1).times(function(){
        elements.forEach(function(element){
          var sprite = Sprite(element).addChildTo(this.list);
          sprite.origin.set(0.5,0);
          sprite.x = x;
          sprite.y = 0;
          this.objects.push(sprite);
        },this);
      },this);
      this.objects[0].y=y;
      this.objects[1].y=y+y_offset;
      this.objects[2].y=y+y_offset*2;
      this.objects[this.objects.length-1].y=y-y_offset;
      this.objects[this.objects.length-2].y=y-y_offset*2;
    }
  },
  update: function(pointer,keyboard,owner){
    
    var y = 110;
    var y_offset = 12;
    if(this.name!="entry"){
      if(!phina.isMobile()){
        
        if(keyboard.getKeyDown("up")){
          this.keyqueue.push("up");
        }
        else if(keyboard.getKeyDown("down")){
          this.keyqueue.push("down");
        }
        if(keyboard.getKeyDown("z")){
          this.keyqueue.push("z");
        }
        if(keyboard.getKeyDown("x")&&this.name!="root"){
          this.keyqueue.push("x");
        }
        var key;
        if(this.list.y===0){
          if(this.keyqueue.length>0){
            key = this.keyqueue[0];
            this.keyqueue.shift();
          }
          if(key=="up"){
            this.up(y_offset);
          }
          else if(key=="down"){
            this.down(y_offset);
          }
          else if(key=="z"){
            this.keyqueue=[];
            var ret = this.enter(owner);
            if(ret != null){
              return ret;
            }
          }
          else if(key=="x"){
            this.resetorder();
            this.keyqueue=[];
            return this.parentname;
          }
        }
      }
      else{
        if(this.dummy.enterflag){
          this.dummy.enterflag=false;
          var ret = this.enter(owner);
          if(ret != null){
            return ret;
          }
        }
        else if(this.dummy.upflag){
          this.dummy.upflag=false;
          this.up(y_offset);
        }
        else if(this.dummy.downflag){
          this.dummy.downflag=false;
          this.down(y_offset);
        }
      }
      return this.name;
    }
    else{
      this.controlobj.mode="standby";
      this.controlobj.target.mode="standby";
      if(keyboard.getKeyDown("x")){
        this.controlobj.mode="safe";
        this.controlobj.target.mode="safe";
        return this.parentname;
      }
      return this.name;
    }
  },
  up: function(val){
    var y = 110;
    var y_offset = val;
    this.list.tweener.clear().to({
      y: y_offset,
    },200,"easeOutQuart").call(function(){
      var buffer=[];
      this.objects.forEach(function(obj,i){
        obj.y=0;
        if(i<this.objects.length-1)
          buffer[i+1]=obj;
        else{
          buffer[0]=obj;
        }
      },this);
      this.objects=buffer;
      this.objects[0].y=y;
      this.objects[1].y=y+y_offset;
      this.objects[2].y=y+y_offset*2;
      this.objects[this.objects.length-1].y=y-y_offset;
      this.objects[this.objects.length-2].y=y-y_offset*2;
      this.list.y=0;
    },this);
  },
  down: function(val){
    var y = 110;
    var y_offset = val;
    this.list.tweener.clear().to({
      y: -y_offset,
    },200,"easeOutQuart").call(function(){
      var buffer=[];
      this.objects.forEach(function(obj,i){
        obj.y=0;
        if(0<i)
          buffer[i-1]=obj;
        else{
          buffer[this.objects.length-1]=obj;
        }
      },this);
      this.objects=buffer;
      this.objects[0].y=y;
      this.objects[1].y=y+y_offset;
      this.objects[2].y=y+y_offset*2;
      this.objects[this.objects.length-1].y=y-y_offset;
      this.objects[this.objects.length-2].y=y-y_offset*2;
      this.list.y=0;
    },this);
  },
  enter: function(owner){
    switch(this.name){
      case "root": 
        switch(this.objects[0].name){
          case "color":
            if(this.controlobj.object.name.match("yukari"))
              return "color_y";
            else if(this.controlobj.object.name.match("maki"))
              return "color_m";
              break;
          default:
            return this.objects[0].name;
        }
        break;
      case "color_y":
        switch(this.objects[0].name){
          case "back":
            this.resetorder();
            return this.parentname;
          default:
            this.controlobj.statusupdate();
            var tmpx=this.controlobj.object.x,tmpy=this.controlobj.object.y;
            var chara="yukari";
            var objname=chara+"_"+this.objects[0].name;
            var objssname=objname+"_ss";
            this.controlobj.object_ss.remove();
            this.controlobj.object.remove();
            this.controlobj.object=Sprite(objname).addChildTo(owner.fighters);
            this.controlobj.object.setPosition(tmpx,tmpy);
            this.controlobj.object.origin.set(0,0);
            this.controlobj.object.frameIndex=0;
            this.controlobj.object_ss = FrameAnimation(objssname);
            this.controlobj.object_ss.attachTo(this.controlobj.object);
            this.controlobj.object_ss.gotoAndPlay(this.controlobj.status);
            this.controlobj.object_ss.currentFrameIndex=this.controlobj.frame;
            break;
        }
        break;
      case "color_m":
        switch(this.objects[0].name){
          case "back":
            this.resetorder();
            return this.parentname;
          default:
            this.controlobj.statusupdate();
            var tmpx=this.controlobj.object.x,tmpy=this.controlobj.object.y;
            var chara="maki";
            var objname=chara+"_"+this.objects[0].name;
            var objssname=objname+"_ss";
            this.controlobj.object_ss.remove();
            this.controlobj.object.remove();
            this.controlobj.object=Sprite(objname).addChildTo(owner.fighters);
            this.controlobj.object.setPosition(tmpx,tmpy);
            this.controlobj.object.origin.set(0,0);
            this.controlobj.object.frameIndex=0;
            this.controlobj.controlobj.object_ss = FrameAnimation(objssname);
            this.controlobj.object_ss.attachTo(this.controlobj.object);
            this.controlobj.object_ss.gotoAndPlay(this.controlobj.status);
            this.controlobj.object_ss.currentFrameIndex=this.controlobj.frame;
            break;
        }
        break;
      case "charactor":
        switch(this.objects[0].name){
          case "back":
            this.resetorder();
            return this.parentname;
          default:
            //TODO
            break;
        }
    }
  },
  resetorder: function(){
    var y = 110;
    var y_offset = 12;
    var cycle = function(i,owner){
      i.times(function(j){
        var buffer=[];
        this.objects.forEach(function(obj,i){
          obj.y=0;
          if(0<i)
            buffer[i-1]=obj;
          else{
            buffer[this.objects.length-1]=obj;
          }
        },this);
        this.objects=buffer;
        this.objects[0].y=y;
        this.objects[1].y=y+y_offset;
        this.objects[2].y=y+y_offset*2;
        this.objects[this.objects.length-1].y=y-y_offset;
        this.objects[this.objects.length-2].y=y-y_offset*2;
      },owner);
    };
    //var buffer = this.objects.concat();
    var diff=0;
    this.objects.some(function(obj,i){
      if(this.elements[0]==obj.name){
        diff=i;
        return true;
      }
    },this);
    if(diff!=0){
      cycle(diff,this);
    }
  }
});
phina.define("GameObject",{
  init: function(images,spritesheet,owner,x,y,isenemy){
    this.object=Sprite(images[0]).addChildTo(owner);
    (images.length-1).times(function(i){
      this.object.addImage(images[i+1]);
    },this);
    this.object.setPosition(x,y);
    this.object.origin.set(0,0);
    this.object.frameIndex=0;
    this.object_ss = FrameAnimation(spritesheet);
    this.object_ss.attachTo(this.object);
    this.object_ss.gotoAndPlay("idol");
    
    this.target=null;
    
    this.hitpoint = 10;
    
    
    this.x_tmp=0;
    this.y_tmp=0;
    this.now=0;
    this.start=0;
    this.status = this.object_ss.currentAnimation.self;
    this.pre_status = this.status;
    this.frame = this.object_ss.currentFrameIndex;
    this.direction = "right";
    
    this.counter_df1_r=0;
    this.counter_df1_l=0;
    this.counter_df2_r=0;
    this.counter_df2_l=0;
    this.df1_r=false;
    this.df1_l=false;
    this.df2_r=false;
    this.df2_l=false;
    this.df3_r=false;
    this.df3_l=false;
    this.counter_hold=0;
    this.jslash_count=0;
    this.towinpose=false;
    this.input = GameInput();
    if(!isenemy)
      this.inputable=true;
    else
      this.inputable=false;
    this.s_shiftflag=false;
    this.isenemy=isenemy;
    this.sousai=false;
    this.hitflag=false;
    
    this.mode="safe";
    this.cattack=false;
    this.sit=false;
    this.okizeme=false;
    this.hangeki=false;
    this.demo=true;
    this.winposecounter=0;
    this.sitcounter=0;
    this.cattackcounter=0;
    this.attackable=true;
  },
  update: function(pointer,pointers,keyboard,owner){
    
    
    
    this.statusupdate();//アニメーション完了による状態変更を適用
    
    if(this.status!=="damage"&&this.status!=="jdamage"&&this.status!=="sdamage"&&this.status!=="counterdamage"
    &&this.status!=="jump"&&this.status!=="jslash"&&this.status!=="dash"&&this.status!=="slash"
    &&this.status!=="jrslash"&&this.status!="jdamage_keep"&&this.status!="shirimochi"&&!this.df3_l&&!this.df3_r){
      if(this.object.x < this.target.object.x)
        this.direction="right";
      else
        this.direction="left";
    }
    if(this.status==="jump"&&this.pre_status==="jslash"&&!this.s_shiftflag){
      this.s_shiftflag=true;
      this.object_ss.currentFrameIndex=this.counter_hold;
      this.statusupdate();
    }
    if(this.status==="idol"&&this.pre_status==="jump"){
      this.jslash_count=0;
    }
    if(this.status==="idol"&&this.towinpose){
      this.object_ss.gotoAndPlay("winpose");
      this.statusupdate();
    }
    if(this.status ==="down"&&this.pre_status=="shirimochi"&&this.frame==0&&this.hitpoint==0){
      this.object_ss.gotoAndPlay("dead");
      this.statusupdate();
    }
    if(this.status == "jdamage_keep"&&this.pre_status=="jdamage"&&!this.s_shiftflag){
      this.s_shiftflag=true;
      this.hitflag=false;
      this.sousai=false;
      var tmp = this.counter_hold;
      if(tmp -1 < 10){
        tmp=10+10-(tmp-1)+1;
      }
      //console.log(tmp);
      this.object_ss.currentFrameIndex=tmp;
      this.statusupdate();
    }
    if(this.status==="idol"&&this.pre_status==="damage"){
      this.hitflag=false;
      this.sousai=false;
    }
    if(this.status==="idol"&&this.pre_status==="slash"){
      this.hitflag=false;
      this.sousai=false;
    }
    if(this.status==="idol"&&this.pre_status==="sslash"){
      this.hitflag=false;
      this.sousai=false;
    }
    if(this.status==="jump"&&this.pre_status==="jslash"){
      this.hitflag=false;
      this.sousai=false;
    }
    if(this.status==="idol"&&this.pre_status==="jrslash"){
      this.hitflag=false;
      this.sousai=false;
    }
    
    //入力
    if(this.inputable){
      var p = pointer;
      var ps = pointers;
      var touches = [];
      if(phina.isMobile()){
        ps.forEach(function(_p, i){
          // 今タッチ中のものだけを touches に入れる
          if(!_p.getPointingEnd() && _p.getPointing()){
            touches.push(_p);
          }
        });
        
        if(touches.length>=1){
          this.now=true;
          if(touches.length==1)
            this.start=p.getPointingStart();
        }
        else{
          this.now=false;
        }
        if(touches.length==2){
          this.input.a=true;
        }
        else{
          this.input.a=false;
        }
        if(this.start){
          this.x_tmp=p.x;
          this.y_tmp=p.y;
        }
        if (this.now) {
          var diff_x = this.x_tmp - p.x;
          var diff_y = this.y_tmp - p.y;
          if (Math.abs(diff_x) > SPEED*5/FOUR) {
            if (diff_x < 0) {
              this.input.right=true;
            }
            else {
              this.input.left=true;
            }
          }
          if(diff_y > SPEED*5/FOUR){
            this.input.up=true;
          }
          if(diff_y < -SPEED*5/FOUR){
            this.input.down=true;
          }
          if(Math.abs(diff_x)<=SPEED*5/FOUR){
            this.input.right=false;
            this.input.left=false;
          }
          if(Math.abs(diff_y)<=SPEED*5/FOUR){
            this.input.up=false;
            this.input.down=false;
          }
        }
        else {
          this.input.up=false;
          this.input.down=false;
          this.input.left=false;
          this.input.right=false;
        }
      }
      else{
        this.input.left=keyboard.getKey("left");
        this.input.right=keyboard.getKey("right");
        this.input.up=keyboard.getKey("up");
        this.input.down=keyboard.getKey("down");
        this.input.a=keyboard.getKey("z");
        
      }
      if(this.input.left&&this.input.right){
        this.input.left=false;
        this.input.right=false;
      }
      if(this.input.up&&this.input.down){
        this.input.up=false;
        this.input.down=false;
      }
    }
    else{
      this.input.a=false;
      this.input.b=false;
      this.input.up=false;
      this.input.down=false;
      this.input.left=false;
      this.input.right=false;
      
      if(this.mode=="sslash"){
        this.input.down=true;
        this.input.a=true;
      }
      if(this.mode!="standby"){
        if(this.status=="winpose_keep"){
          this.winposecounter++;
          if(this.winposecounter>=30){
            this.winposecounter=0;
            this.object_ss.gotoAndPlay("wintoidol");
            updatehantei(this);
          }
        }
        if(this.status=="damage"){
          this.mode="wait";
        }
        if(this.target.status=="counterdamage"){
          this.mode="wait";
          this.hangeki=true;
        }
        if(this.target.status=="jdamage"){
          this.mode="wait";
          this.okizeme=true;
        }
        if(this.mode=="wait"){
          if(this.status=="idol"){
            this.mode="safe";
            if(this.okizeme){
              this.mode="okizeme";
              this.okizeme=false;
            }
            if(this.hangeki){
              this.mode="hangeki";
              this.hangeki=false;
            }
          }
          if(this.status=="sit"){
            this.sit=false;
          }
        }
        if(this.mode=="safe"){
          if(this.sit){
            this.sitcounter++;
            this.input.down=true;
            var tmp = Math.random();
            if(tmp<0.2){
              this.mode="combo";
            }
            if(this.sitcounter>7){
              this.input.down=false;
              this.sitcounter=0;
              this.sit=false;
            }
          }
          else{
            if(Math.abs(this.object.x-this.target.object.x)<410/FOUR&&!this.cattack){
              if(this.status==="jump"){
                if(Math.abs(this.object.x-this.target.object.x)<285/FOUR&&this.target.status!="sit"&&this.target.status!="sslash")
                  this.input.a=true;
              }
              if(this.target.status=="sslash"){
              this.input.up=true;
              this.input.a=true;
              }
              if(this.target.status=="slash"){
                this.sit=true;
                this.input.down=true;
                this.sitcounter=0;
              }
              if(this.target.status=="dash"){
                var tmp=Math.random();
                if(tmp<0.5){
                  this.input.a=true;
                }
                else{
                  this.input.down=true;
                  this.sit=true;
                  this.mode="combo";
                }
              }
              else if(this.target.status=="jump"){
                this.input.a=true;
              }
              else{
                if(this.target.object.x<this.object.x)
                  this.input.right=true;
                else
                  this.input.left=true;
              }
            }
            if(Math.abs(this.object.x-this.target.object.x)>=410/FOUR&&Math.abs(this.object.x-this.target.object.x)<410/FOUR+48/FOUR&&this.target.status=="slash"){
              this.cattack=true;
            }
            if(this.cattack){
              this.cattackcounter++;
              if(this.cattackcounter>5){
                this.cattackcounter=0;
                this.cattack=false;
                this.input.a=true;
              }
            }
            if(this.target.status=="damage"){
              this.mode="combo";
            }
            if(410/FOUR<=Math.abs(this.object.x-this.target.object.x)&&Math.abs(this.object.x-this.target.object.x)<460/FOUR){
              if(this.target.object.x<this.object.x)
                this.input.right=true;
              else
                this.input.left=true;
            }
            if(460/FOUR<=Math.abs(this.object.x-this.target.object.x)&&Math.abs(this.object.x-this.target.object.x)<500/FOUR){
              var tmp=Math.random();
              if(tmp<0.2)
                this.input.a=true;
            }
            if(500/FOUR<=Math.abs(this.object.x-this.target.object.x)){
              var tmp=Math.random();
              if(tmp<0.01){
                this.input.a=true;
              }
              else{
                if(this.target.object.x<this.object.x)
                  this.input.left=true;
                else
                  this.input.right=true;
              }
            }
          }
        }
        if(this.mode=="combo"){
          if(this.status=="jump"){
            this.input.a=true;
          }
          if(this.status=="idol"){
            var tmp = Math.random();
            if(tmp < 1/3){
              this.input.a=true;
            }
            else if(tmp < 2/3){
              this.sit=true;
              this.input.down=true;
            }
            else{
              this.input.up=true;
              this.input.a=true;
            }
          }
          if(this.sit){
            this.input.down=true;
            if(this.status=="sit"){
              this.sit=false;
              this.input.a=true;
              this.mode="wait";
            }
          }
        }
        if(this.mode=="okizeme"){
          if(Math.abs(this.object.x-this.target.object.x)>=400/FOUR){
            if(this.target.object.x<this.object.x){
              if(this.status=="idol"){
                this.object_ss.gotoAndPlay("dash");
                this.statusupdate();
              }
              this.input.left=true;
            }
            else{
              if(this.status=="idol"){
                this.object_ss.gotoAndPlay("dash");
                this.statusupdate();
              }
              this.input.right=true;
            }
          }
          else{
            this.input.a=true;
            this.mode="wait";
          }
        }
        if(this.mode=="hangeki"){
          if(this.target.status!="counterdamage"){
            this.mode="safe";
          }
          if(Math.abs(this.object.x-this.target.object.x)<250/FOUR){
            if(this.target.object.x<this.object.x)
                this.input.right=true;
              else
                this.input.left=true;
          }
          else{
            this.input.a=true;
            if(this.target.status==="damage"){
              this.mode="combo";
            }
          }
        }
      }
      else{
        this.input.down=false;
        this.input.up=false;
        if(this.isenemy){
          if(this.object.x>=310/FOUR){
            this.input.left=true;
          }
          if(this.object.x<300/FOUR){
            this.input.right=true;
          }
        }
        else{
          if(this.object.x<=-310/FOUR){
            this.input.right=true;
          }
          if(this.object.x>-300/FOUR){
            this.input.left=true;
          }
        }
      }
    }
    if(!this.attackable){
      this.input.a=false;
    }
    
    
    //入力から状態を決定
    if(!this.input.left){
      if(this.df3_l)
        this.df3_l=false;
      
			if(this.df1_l&&!this.df2_l&& this.counter_df1_l < 6){
				this.df1_l=false;
				this.df2_l=true;
				this.counter_df1_l = 0;
			}
			else if(this.df1_l&&6<=this.counter_df1_l){
				this.df1_l=false;
				this.df2_l=false;
				this.counter_df1_l = 0;
			}
      if(this.direction=="left"&&(this.status==="walkbegin"||this.status==="walk"||this.status==="dash")){
        if(this.status==="dash"){
          this.counter_df2_l=0;
          this.df2_l=false;
        }
        this.object_ss.gotoAndPlay("idol");
        this.statusupdate();
      }
      else if(this.direction=="right"&&(this.status==="backwalkbegin"||this.status==="backwalk")){
        this.object_ss.gotoAndPlay("idol");
        this.statusupdate();
      }
    }
    if(!this.input.right){
      if(this.df3_r)
        this.df3_r=false;
      if(this.df1_r&&!this.df2_r&& this.counter_df1_r < 6){
				this.df1_r=false;
				this.df2_r=true;
				this.counter_df1_r = 0;
			}
			else if(this.df1_r&&6<=this.counter_df1_r){
				this.df1_r=false;
				this.df2_r=false;
				this.counter_df1_r = 0;
			}
			if(this.direction=="right"&&(this.status==="walkbegin"||this.status==="walk"||this.status==="dash")){
        if(this.status==="dash"){
          this.counter_df2_r=0;
          this.df2_r=false;
        }
        this.object_ss.gotoAndPlay("idol");
        this.statusupdate();
      }
      else if(this.direction=="left"&&(this.status==="backwalkbegin"||this.status==="backwalk")){
        this.object_ss.gotoAndPlay("idol");
        this.statusupdate();
      }
    }
    if(!this.input.down){
      if(this.status==="sit"){
          this.object_ss.gotoAndPlay("standup");
          this.statusupdate();
        }
    }
    if(this.input.left){
      if(this.df3_l){
        this.df3_l=false;
        if(this.status==="idol"){
          this.object_ss.gotoAndPlay("dash");
          this.statusupdate();
        }
      }
      this.df1_l=true;
      if(this.df2_l&& this.counter_df2_l <6){
				this.df2_l = false;
				this.counter_df2_l = 0;
				if(this.status === "idol"||this.status == "walk"||this.status == "walkbegin"){
					if(this.direction ==="left"){
						this.object_ss.gotoAndPlay("dash");
            this.statusupdate();
					}
					else{
						this.object_ss.gotoAndPlay("backstep");
            this.statusupdate();
					}
				}
			}
			else if(this.df2_l){
			  this.df2_l = false;
				this.counter_df2_l = 0;
			}
      if(this.direction=="left"){
        if(this.status==="idol"||this.status==="backwalk"||this.status==="backwalkbegin"){
          this.object_ss.gotoAndPlay("walkbegin");
          this.statusupdate();
        }
      }
      else{
        if(this.status==="idol"||this.status==="walk"||this.status==="walkbegin"){
          this.object_ss.gotoAndPlay("backwalkbegin");
          this.statusupdate();
        }
      }
    }
    if(this.input.right){
      if(this.df3_r){
        this.df3_r=false;
        if(this.status==="idol"){
          this.object_ss.gotoAndPlay("dash");
          this.statusupdate();
        }
      }
      this.df1_r=true;
      if(this.df2_r&& this.counter_df2_r <6){
				this.df2_r = false;
				this.counter_df2_r = 0;
				if(this.status === "idol"||this.status == "walk"||this.status == "walkbegin"){
					if(this.direction ==="right"){
						this.object_ss.gotoAndPlay("dash");
            this.statusupdate();
					}
					else{
						this.object_ss.gotoAndPlay("backstep");
            this.statusupdate();
					}
				}
			}
			else if(this.df2_r){
			  this.df2_r = false;
				this.counter_df2_r = 0;
			}
      if(this.direction=="right"){
        if(this.status==="idol"||this.status==="backwalk"||this.status==="backwalkbegin"){
          this.object_ss.gotoAndPlay("walkbegin");
          this.statusupdate();
        }
      }
      else{
        if(this.status==="idol"||this.status==="walk"||this.status==="walkbegin"){
         this.object_ss.gotoAndPlay("backwalkbegin");
         this.statusupdate();
        }
      }
    }
    if(this.input.up){
      if(this.status==="idol"||this.status==="backwalkbegin"||this.status==="backwalk"||this.status==="walkbegin"||this.status==="walk"||this.status==="dash"){
          this.object_ss.gotoAndPlay("jump");
          this.statusupdate();
          if(this.pre_status==="dash"){
            this.object_ss.currentFrameIndex=2;
            this.statusupdate();
          }
        }
    }
    if(this.input.down){
      if(this.status==="idol"||this.status==="backwalkbegin"||this.status==="backwalk"||this.status==="walkbegin"||this.status==="walk"){
        this.object_ss.gotoAndPlay("sitdown");
        this.statusupdate();
      }
      else if(this.status==="dash"){
        this.object_ss.gotoAndPlay("sit");
        this.statusupdate();
      }
    }
    if(this.input.a){
      //console.log("attack");
      if(this.status==="idol"||this.status==="walk"||this.status==="walkbegin"||this.status==="backwalk"||this.status==="backwalkbegin"){
        this.object_ss.gotoAndPlay("slash");
        this.statusupdate();
      }
      if(this.status==="dash"){
        this.object_ss.gotoAndPlay("slash");
        this.statusupdate();
      }
      if(this.status=="jump"&&this.frame<=2){
        this.object_ss.gotoAndPlay("jrslash");
        this.statusupdate();
      }
      if(this.status==="jump"&&2<this.frame&&this.frame<18&&this.jslash_count<3){
        this.jslash_count++;
        this.counter_hold=this.frame;
        this.object_ss.gotoAndPlay("jslash");
        this.statusupdate();
        this.s_shiftflag=false;
      }
      if(this.status=="sit"){
        this.object_ss.gotoAndPlay("sslash");
        this.statusupdate();
      }
    }
    //状態から動作を決定
    if(this.status==="walkbegin"||this.status==="walk"){
     if(this.direction=="right"){
      this.object.x += SPEED/FOUR;
     }
     else{
       this.object.x -= SPEED/FOUR;
     }
    }
    if(this.status==="backwalkbegin"||this.status==="backwalk"){
      if(this.direction=="right"){
      this.object.x -= SPEED/FOUR;
     }
     else{
       this.object.x += SPEED/FOUR;
     }
    }
    if(this.status==="dash"){
      if(this.direction==="right"){
        this.object.x += 19/FOUR;
      }
      else{
        this.object.x -= 19/FOUR;
      }
    }
    if(this.status==="backstep"){
      if(1<this.frame&&this.frame<14){
        if(this.direction==="right"){
          this.object.x -= 20/FOUR;
        }
        else{
          this.object.x += 20/FOUR;
        }
      }
    }
    if(this.status==="slash"){
      if(4<this.frame&&this.frame<8){
        if(this.direction=="right"){
          this.object.x += 16/FOUR;
         }
         else{
           this.object.x -= 16/FOUR;
         }
      }
    }
    if(this.status==="jump"){
      if(this.pre_status==="dash"&&!this.df3_r&&!this.df3_l){
        if(this.direction==="right"){
          this.df3_r=true;
        }
        else{
          this.df3_l=true;
        }
      }
      if(2<this.frame&&this.frame<18){
        var JUMP_Y_ = 2.5*Math.pow(this.frame-9.5,2)-106;
        var JUMP_DY_ = JUMP_Y_-(2.5*Math.pow(this.frame-1-9.5,2)-106);
        this.object.y += JUMP_DY_/FOUR;
      }
      if(this.pre_status==="walk"||this.pre_status==="walkbegin"){
        if(this.direction=="right"){
          this.object.x += SPEED/FOUR;
        }
        else{
          this.object.x -= SPEED/FOUR;
        }
      }
      if(this.pre_status==="backwalk"||this.pre_status==="backwalkbegin"){
        if(this.direction=="right"){
          this.object.x -= SPEED/FOUR;
         }
         else{
           this.object.x += SPEED/FOUR;
         }
      }
      if(this.pre_status==="dash"){
        if(this.direction=="right"){
          this.object.x += 19/FOUR;
        }
        else{
          this.object.x -= 19/FOUR;
        }
      }
      
    }
    if(this.status==="jrslash"){
      if(this.frame<15){
        var jump_y = 2.5*Math.pow(this.frame+3-9.5,2)-106;
        var jump_dy = jump_y-(2.5*Math.pow(this.frame+3-1-9.5,2)-106);
        this.object.y += jump_dy/FOUR;
      }
      if(this.direction=="right"){
        this.object.x += SPEED*3/FOUR;
      }
      else{
        this.object.x -= SPEED*3/FOUR;
      }
    }
    if(this.status==="jdamage"){
      if(this.direction=="right"){
        this.object.x -= SPEED*3/FOUR;
      }
      else{
        this.object.x += SPEED*3/FOUR;
      }
    }
    if(this.status==="jdamage_keep"){
      if(this.direction=="right"){
        this.object.x -= SPEED*3/FOUR;
      }
      else{
        this.object.x += SPEED*3/FOUR;
      }
      var jump_y = 2.5*Math.pow(this.frame-9.5,2)-106;
      var jump_dy = jump_y-(2.5*Math.pow(this.frame-1-9.5,2)-106);
      this.object.y += jump_dy/FOUR;
      if(this.object.y>=0){
        this.object.y=0;
        this.object_ss.gotoAndPlay("shirimochi");
        this.statusupdate();
      }
    }
    if(this.status==="shirimochi"){
      if(this.direction=="right"){
        this.object.x -= SPEED*3/FOUR;
      }
      else{
        this.object.x += SPEED*3/FOUR;
      }
    }
    if(this.direction=="right"){
      this.object.reverse=true;
    }
    else{
      this.object.reverse=false;
    }
    
    
    
    if(this.df1_l)
      this.counter_df1_l++;
    if(this.df1_r)
      this.counter_df1_r++;
    if(this.df2_l)
      this.counter_df2_l++;
    if(this.df2_r)
      this.counter_df2_r++;
  },
  updatehantei: function(hanteilist,hanteipool){
    var str = this.status;
    var i = 0;
    switch (str) {
      case 'backstep':
        i=0;
        break;
      case 'backwalk':
        i=1;
        break;
      case 'counterdamage':
        i=2;
        break;
      case 'damage':
        i=3;
        break;
      case 'dash':
        i=4;
        break;
      case 'down':
        i=5;
        break;
      case 'idol':
        i=6;
        break;
      case 'jdamage':
        i=7;
        break;
      case 'jrslash':
        i=8;
        break;
      case 'jslash':
        i=9;
        break;
      case 'jump':
        i=10;
        break;
      case 'sdamage':
        i=11;
        break;
      case 'shirimochi':
        i=12;
        break;
      case 'sit':
        i=13;
        break;
      case 'slash':
        i=14;
        break;
      case 'sslash':
        i=15;
        break;
      case 'wakeup':
        i=16;
        break;
      case 'walk':
        i=17;
        break;
      case 'winpose':
        i=18;
        break;
      case 'wintoidol':
        i=19;
        break;
      case 'backwalkbegin':
        i=20;
        break;
      case 'walkbegin':
        i=21;
        break;
      case 'standup':
        i=22;
        break;
      case 'sitdown':
        i=23;
        break;
      case 'jdamage_keep':
        i=24;
        break;
      default:
        i=5;
    }
    if(hanteilist[i][this.frame]==null){
      console.log(this.status,this.frame,this.counter_hold);
    }
    (hanteilist[i][this.frame].hantei.length).times(function(j){
      var h = new Object();
      h.type = hanteilist[i][this.frame].hantei[j].type;
      h.x1 = hanteilist[i][this.frame].hantei[j].x1/FOUR;
      h.y1 = hanteilist[i][this.frame].hantei[j].y1/FOUR;
      h.x2 = hanteilist[i][this.frame].hantei[j].x2/FOUR;
      h.y2 = hanteilist[i][this.frame].hantei[j].y2/FOUR;
      
      if(this.direction=="right"){
        var tmp = h.x1;
  			h.x1 = SCREEN_WIDTH/2-(h.x2-SCREEN_WIDTH/2);
  			h.x2 = SCREEN_WIDTH/2-(tmp-SCREEN_WIDTH/2);
  			
      }
      if(this.isenemy){
        if(h.type==="body"){
          h.type="body_e";
        }
        if(h.type==="attack"){
          h.type="attack_e";
        }
      }
      else{
        if(h.type==="body"){
          h.type="body_p";
        }
        if(h.type==="attack"){
          h.type="attack_p";
        }
      }
      h.x1 += this.object.x;
      h.x2 += this.object.x;
      h.y1 += this.object.y;
      h.y2 += this.object.y;
      hanteipool.push(h);
    },this);
    
  },
  statusupdate: function(){
      var tmp=this.pre_status;
      this.pre_status = this.status;
      this.status = this.object_ss.currentAnimation.self;
      if(this.pre_status===this.status){
        this.pre_status=tmp;
      }
      this.frame = this.object_ss.currentFrameIndex;
      //console.log(owner.pre_status,owner.status);
    },
  damage: function(owner){
    
    if(this.hitpoint != 0){
      if(this.status!="jdamage"||this.status!="jdamage_keep"){
        if(this.status==="jump"||this.status==="jslash"||this.status==="jrslash"){
          if(this.status==="jump"||this.status==="jrslash"){
            this.s_shiftflag=false;
            this.counter_hold=this.frame;
            if(this.status==="jrslash"){
              this.counter_hold+=3;
            }
          }
          if(this.object.x < this.target.object.x)
            this.direction="right";
          else
            this.direction="left";
          this.object_ss.gotoAndPlay("jdamage");
          this.statusupdate();
          if(!this.sousai)
            owner.jhitSE.play();
        }
        else if(this.status==="sit"){
          this.object_ss.gotoAndPlay("sdamage");
          this.statusupdate();
          if(!this.sousai)
            owner.slashSE.play();
        }
        else if(this.status==="slash"&&this.target.status==="sslash"){
          this.object_ss.gotoAndPlay("counterdamage");
          this.statusupdate();
          if(!this.sousai)
            owner.chitSE.play();
        }
        else if(this.status==="sslash"&&this.target.status==="jrslash"){
          this.object_ss.gotoAndPlay("counterdamage");
          this.statusupdate();
          if(!this.sousai)
            owner.chitSE.play();
        }
        else{
          this.object_ss.gotoAndPlay("damage");
          this.statusupdate();
          if(!this.sousai)
            owner.slashSE.play();
        }
      }
    }
    else{
      this.s_shiftflag=false;
      if(this.object.x < this.target.object.x)
        this.direction="right";
      else
        this.direction="left";
      this.object_ss.gotoAndPlay("jdamage");
      this.statusupdate();
      owner.todomeSE.play();
    }
  //console.log(this.status);
  }
});
/*
 * メインシーン
 */
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',

  // 初期化
  init: function(options) {
    // super init
    this.superInit(options);

    
    // 背景
    this.bg = Sprite("bg25").addChildTo(this);
    this.bg1 = Sprite("bg25").addChildTo(this);
    this.bg2 = Sprite("bg25").addChildTo(this);
    
    this.bg.origin.set(0, 0); // 左上基準に変更
    this.bg1.origin.set(0,0);
    this.bg2.origin.set(0,0);
    this.bg1.x-=SCREEN_WIDTH;
    this.bg2.x+=SCREEN_WIDTH;
    
    this.fighters = DisplayElement().addChildTo(this);
    // プレイヤー
    this.player = GameObject(['yukari_origin'],'yukari_origin_ss',this.fighters,-300/FOUR,0,false);
    this.enemy = GameObject(['yukari_legacy'],'yukari_legacy_ss',this.fighters,300/FOUR,0,true);
    
    this.player.object.reverse=true;
    this.player.inputable=false;
    
    this.player.target=this.enemy;
    this.enemy.target=this.player;
    
    this.surface = DisplayElement().addChildTo(this);
    this.title = Sprite("title").addChildTo(this.surface);
    this.title.origin.set(0,0);
    this.title.x=10;
    this.title.y=10;
    
    this.menu1 = DisplayElement().addChildTo(this.surface);
    this.m_center = DisplayElement().addChildTo(this.surface);
    this.menu2 = DisplayElement().addChildTo(this.surface);
    
    
    this.clist1={};
    this.clist1["root"] = GameConsole("root",null,["charactor","color","entry"],this.menu1,50,this.player);
    this.clist1["charactor"] = GameConsole("charactor","root",["c_maki","c_yukari","back"],this.menu1,50,this.player);
    this.clist1["color_y"] = GameConsole("color_y","root",["origin","legacy","back"],this.menu1,50,this.player);
    this.clist1["color_m"] = GameConsole("color_m","root",["origin","white","back"],this.menu1,50,this.player);
    this.clist1["entry"] = GameConsole("entry","root",[],this.menu1,50,this.player);
    this.clist1["charactor"].parent.hide();
    this.clist1["color_y"].parent.hide();
    this.clist1["color_m"].parent.hide();
    this.clist1["entry"].parent.hide();
    
    
    this.clist2={};
    this.clist2["root"] = GameConsole("root",null,["charactor","color","entry"],this.menu2,190,this.enemy);
    this.clist2["charactor"] = GameConsole("charactor","root",["c_maki","c_yukari","back"],this.menu2,190,this.enemy);
    this.clist2["color_y"] = GameConsole("color_y","root",["origin","legacy","back"],this.menu2,190,this.enemy);
    this.clist2["color_m"] = GameConsole("color_m","root",["origin","white","back"],this.menu2,190,this.enemy);
    this.clist2["entry"] = GameConsole("entry","root",[],this.menu2,190,this.enemy);
    this.clist2["charactor"].parent.hide();
    this.clist2["color_y"].parent.hide();
    this.clist2["color_m"].parent.hide();
    this.clist2["entry"].parent.hide();
    
    this.clist_c={};
    this.clist_c["root"] = GameConsole("root",null,["settings","exit"],this.m_center,120);
    var clists = [this.clist1,this.clist_c,this.clist2];
    var pointflag=true;
    //this.pcflag=false;
    var conpstart = function(e){
      if(!clists[0]["entry"].parent.visible&&!clists[2]["entry"].parent.visible){
        var tl = e.interactive.app.touchList.touches;
        if(this.getParent().getParent().visible&&tl.length==1){
          pointflag=true;
          clists.some(function(clist){
              if(clist["root"].owner.alpha==1||clist["root"].owner.alpha==0.25){
                pointflag=true;
              }
              else{
                pointflag=false;
                return true;
              }
            });
          if(this.getParent().getParent().getParent().alpha==0.25&&pointflag){
            this.getParent().getParent().getParent().tweener.clear().set({alpha: 0.26}).to({alpha: 1},200,"easeOutQuart");
            clists.forEach(function(clist){
              if(clist["root"].owner.alpha==1){
                clist["root"].owner.tweener.clear().set({alpha: 0.99}).to({alpha: 0.25},200,"easeOutQuart");
              }
            });
          }
          else if(this.getParent().getParent().getParent().alpha==1&&pointflag){
            this.pcflag=true;
          }
        }
      }
    };
    var conpmove = function(e){
      if(this.getParent().getParent().visible&&this.pcflag){
        if(-6<=this.getParent().y&&this.getParent().y<=6){
          this.getParent().moveBy(0,e.pointer.deltaPosition.y);
        }
        else if(this.getParent().y<-6){
          this.getParent().y=-7;
        }
        else{
          this.getParent().y=7;
        }
      }
    }
    var conpend = function(e){
      if(this.getParent().getParent().visible&&this.pcflag){
        this.pcflag=false;
        if(this.getParent().y<-6||6<this.getParent().y){
          if(this.getParent().y<-6){
            this.downflag=true;
          }
          else{
            this.upflag=true;
          }
        }
        else if(this.getParent().y==0){
          this.enterflag=true;
        }
        else{
          this.getParent().tweener.clear().to({y: 0},100,"easeOutQuart");
        }
      }
    };
    for(con in this.clist1){
      this.clist1[con].dummy.setInteractive(true);
      this.clist1[con].dummy.onpointstart=conpstart;
      this.clist1[con].dummy.onpointmove=conpmove;
      this.clist1[con].dummy.onpointend=conpend;
    }
    for(con in this.clist2){
      this.clist2[con].dummy.setInteractive(true);
      this.clist2[con].dummy.onpointstart=conpstart;
      this.clist2[con].dummy.onpointmove=conpmove;
      this.clist2[con].dummy.onpointend=conpend;
    }
    for(con in this.clist_c){
      this.clist_c[con].dummy.setInteractive(true);
      this.clist_c[con].dummy.onpointstart=conpstart;
      this.clist_c[con].dummy.onpointmove = conpmove;
      this.clist_c[con].dummy.onpointend = conpend;
    }
    this.menu2.alpha=0.25;
    this.m_center.alpha = 0.25;
    
    this.decolate = DisplayElement().addChildTo(this);
    
    this.ready = Sprite("ready").addChildTo(this.decolate);
    this.fight = Sprite("fight").addChildTo(this.decolate);
    
    this.hitpoints = [RectangleShape({originX:0.5,originY:0,x:5+5,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+12,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+19,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+26,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+33,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+40,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+47,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+54,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+61,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:5+68,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)];
    this.hitpoints.forEach(function(hp,i){
      hp.hide();
    },this);
    
    this.hitpoints2 = [RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-5,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-12,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-19,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-26,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-33,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-40,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-47,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-54,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-61,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)
    ,RectangleShape({originX:0.5,originY:0,x:-5+SCREEN_WIDTH-68,y:0,width:5,height:20,stroke:false,fill:"#f44"}).addChildTo(this.decolate)];
    this.hitpoints2.forEach(function(hp,i){
      hp.hide();
    },this);
    
    this.decolate.hide();
    
    this.hanteilist = [];
    var _hanteis = ["hantei0","hantei1","hantei2","hantei3","hantei4","hantei5","hantei6","hantei7","hantei8","hantei9","hantei10","hantei11","hantei12","hantei13","hantei14","hantei15","hantei16","hantei17","hantei18","hantei19"
    ,"hantei20","hantei21","hantei22","hantei23","hantei24"
    ];
    (_hanteis.length).times(function(i){
      var tmp = AssetManager.get("json",_hanteis[i]);
      this.hanteilist.push(tmp.data);
    },this);
    this.hanteipool=[];
    
    this.karaburiflag1_p=false;
    this.karaburiflag2_p=false;
    this.karaburiflag1_e=false;
    this.karaburiflag2_e=false;
    
    this.SEpool = [];
    this.cancelSE = AssetManager.get("sound","cancel");
    this.SEpool.push(this.cancelSE);
    this.chitSE = AssetManager.get("sound","chit");
    this.SEpool.push(this.chitSE);
    this.cursorSE = AssetManager.get("sound","cursor");
    this.SEpool.push(this.cursorSE);
    this.enterSE = AssetManager.get("sound","enter");
    this.SEpool.push(this.enterSE);
    this.fightSE = AssetManager.get("sound","fight");
    this.SEpool.push(this.fightSE);
    this.jhitSE = AssetManager.get("sound","jhit");
    this.SEpool.push(this.jhitSE);
    this.karaburiSE = AssetManager.get("sound","karaburi");
    this.SEpool.push(this.karaburiSE);
    this.sousaiSE = AssetManager.get("sound","sousai");
    this.SEpool.push(this.sousaiSE);
    this.readySE = AssetManager.get("sound","ready");
    this.SEpool.push(this.readySE);
    this.slashSE = AssetManager.get("sound","slash");
    this.SEpool.push(this.slashSE);
    this.todomeSE = AssetManager.get("sound","todome");
    this.SEpool.push(this.todomeSE);
    
    this.SEpool.forEach(function(se){
      se.volume=0.15;
    });
    this.fflag=false;
    this.pre_fflag=false;
    this.dflag=false;
    this.pre_dfalg=false;
  },
  
  // 更新
  update: function(app) {
    
    //console.log(this.clist1["root"].list.tweener.playing);
    var hpappear = function(i,owner){
      if(i<10){
        owner.hitpoints[i].show();
        owner.hitpoints[i].tweener.clear().wait(100).call(hpappear,owner,[i+1,owner]);
      }
    };
    var hpappear2 = function(i,owner){
      if(i<10){
        owner.hitpoints2[i].show();
        owner.hitpoints2[i].tweener.clear().wait(100).call(hpappear2,owner,[i+1,owner]);
      }
    };
    function Collision(h1,h2){
      if(h1.x1<h2.x2&&h2.x1<h1.x2&&h1.y1<h2.y2&&h2.y1<h1.y2){
        return true;
      }
      else return false;
    }
    
    var clists = [this.clist1,this.clist_c,this.clist2];
    if(this.surface.visible){
      if(!this.clist1["entry"].parent.visible&&!this.clist2["entry"].parent.visible){
        if(app.keyboard.getKeyDown("right")){
          clists.forEach(function(clist,i){
            if(clist["root"].owner.alpha==1){
              clist["root"].owner.tweener.clear().to({alpha: 0.25},200,"easeOutQuart");
              clists[(i+1)%clists.length]["root"].owner.tweener.clear().to({alpha: 1},200,"easeOutQuart");
            }
          },this);
        }
        else if(app.keyboard.getKeyDown("left")){
          clists.forEach(function(clist,i){
            if(clist["root"].owner.alpha==1){
              clist["root"].owner.tweener.clear().to({alpha: 0.25},200,"easeOutQuart");
              clists[(i-1)*(i-1<0?-(clists.length-1):1)]["root"].owner.tweener.clear().to({alpha: 1},200,"easeOutQuart");
            }
          },this);
        }
      }
      var conname;
      if(this.clist1["root"].owner.alpha==1){
        for(con in this.clist1){
          if(this.clist1[con].parent.visible){
            conname=this.clist1[con].update(app.pointer,app.keyboard,this);
            this.clist1[con].parent.hide();
          }
        }
        this.clist1[conname].parent.show();
      }
      if(this.clist2["root"].owner.alpha==1){
        for(con in this.clist2){
          if(this.clist2[con].parent.visible&&this.clist2[con].owner.alpha==1){
            conname=this.clist2[con].update(app.pointer,app.keyboard,this);
            this.clist2[con].parent.hide();
          }
        }
        this.clist2[conname].parent.show();
      }
      if(this.clist_c["root"].owner.alpha==1){
        for(con in this.clist_c){
          if(this.clist_c[con].parent.visible&&this.clist_c[con].owner.alpha==1){
            conname=this.clist_c[con].update(app.pointer,app.keyboard,this);
            this.clist_c[con].parent.hide();
          }
        }
        this.clist_c[conname].parent.show();
      }
    }
    var bgs = [];
    bgs.push(this.bg);
    bgs.push(this.bg1);
    bgs.push(this.bg2);
    var gos = [];
    gos.push(this.player);
    gos.push(this.enemy);
    this.player.update(app.pointer,app.pointers,app.keyboard,this.fighters);
    this.enemy.update(app.pointer,app.pointers,app.keyboard,this.fighters);
    //this.player2.update();
    //this.enemy2.update();
    
    (gos.length).times(function(i){
      if(gos[i].object.x<-430/FOUR){
        var tmp=0;
        tmp = -430/FOUR-gos[i].object.x;
        gos[i].object.x=-430/FOUR;
        (bgs.length).times(function(j){
          bgs[j].x+=tmp;
          if(bgs[j].x>SCREEN_WIDTH){
            var tmp2 = bgs[j].x;
            bgs[j].x = tmp2 - SCREEN_WIDTH*3;
          }
        },this);
        gos[i].target.object.x+=tmp;
        if(gos[i].target.object.x>430/FOUR){
          gos[i].target.object.x=430/FOUR;
        }
      }
      if(gos[i].object.x>430/FOUR){
        var tmp=0;
        tmp = 430/FOUR-gos[i].object.x;
        gos[i].object.x=430/FOUR;
        (bgs.length).times(function(j){
          bgs[j].x+=tmp;
          if(bgs[j].x<-SCREEN_WIDTH){
            var tmp2 = bgs[j].x;
            bgs[j].x = tmp2 + SCREEN_WIDTH*3;
          }
        },this);
        gos[i].target.object.x+=tmp;
        if(gos[i].target.object.x<-430/FOUR){
          gos[i].target.object.x=-430/FOUR;
        }
      }
    },this);
    
    
    
    
    this.hanteipool = [];
    this.player.updatehantei(this.hanteilist,this.hanteipool);
    this.enemy.updatehantei(this.hanteilist,this.hanteipool);
    
    (this.hanteipool.length).times(function(i){
      if(this.hanteipool[i].type==="attack_p"){
        this.karaburiflag2_p=false;
        this.karaburiflag1_p=true;
        (this.hanteipool.length).times(function(j){
          if(this.hanteipool[j].type==="attack_e"){
            if(Collision(this.hanteipool[i],this.hanteipool[j])){
              this.karaburiflag1_p=false;
              this.sousaiSE.play();
              this.player.sousai=true;
              this.enemy.sousai=true;
            }
          }
        },this);
        (this.hanteipool.length).times(function(j){
          if(this.hanteipool[j].type==="body_e"){
            if(Collision(this.hanteipool[i],this.hanteipool[j])){
              this.karaburiflag1_p=false;
              if(!this.player.hitflag&&this.enemy.hitpoint>0){
                if(!this.player.sousai&&!this.enemy.demo){
                  this.hitpoints2[this.enemy.hitpoint-1].hide();
                  this.enemy.hitpoint--;
                }
              this.enemy.damage(this);
              this.player.hitflag=true;
              }
              
            }
          }
        },this);
      }
      else if(this.hanteipool[i].type==="attack_e"){
        this.karaburiflag2_e=false;
        this.karaburiflag1_e=true;
        (this.hanteipool.length).times(function(j){
          if(this.hanteipool[j].type==="attack_p"){
            if(Collision(this.hanteipool[i],this.hanteipool[j])){
              this.karaburiflag1_e=false;
              this.player.sousai=true;
              this.enemy.sousai=true;
            }
          }
        },this);
        (this.hanteipool.length).times(function(j){
          if(this.hanteipool[j].type==="body_p"){
            if(Collision(this.hanteipool[i],this.hanteipool[j])){
              this.karaburiflag1_e=false;
              if(!this.enemy.hitflag&&this.player.hitpoint>0){
                if(!this.enemy.sousai&&!this.player.demo){
                  this.hitpoints[this.player.hitpoint-1].hide();
                  this.player.hitpoint--;
                }
              this.player.damage(this);
              this.enemy.hitflag=true;
              }
              
            }
          }
        },this);
      }
    },this);
    if(this.karaburiflag2_p&&!this.player.hitflag
    &&this.player.status!="damage"
    &&this.player.status!="jdamage"
    &&this.player.status!="sdamage"
    &&this.player.status!="counterdamage"){
      this.karaburiflag1_p=false;
      this.karaburiflag2_p=false;
      this.karaburiSE.play();
    }
    if(this.karaburiflag2_p&&(this.player.hitflag
    ||this.player.status=="damage"
    ||this.player.status=="jdamage"
    ||this.player.status=="sdamage"
    ||this.player.status=="counterdamage")){
      this.karaburiflag1_p=false;
      this.karaburiflag2_p=false;
    }
    if(this.karaburiflag2_e&&!this.enemy.hitflag
    &&this.enemy.status!="damage"
    &&this.enemy.status!="jdamage"
    &&this.enemy.status!="sdamage"
    &&this.enemy.status!="counterdamage"){
      this.karaburiflag1_e=false;
      this.karaburiflag2_e=false;
      this.karaburiSE.play();
    }
    if(this.karaburiflag2_e&&(this.enemy.hitflag
    ||this.enemy.status=="damage"
    ||this.enemy.status=="jdamage"
    ||this.enemy.status=="sdamage"
    ||this.enemy.status=="counterdamage")){
      this.karaburiflag1_e=false;
      this.karaburiflag2_e=false;
    }
    if(this.karaburiflag1_p)
      this.karaburiflag2_p=true;
    if(this.karaburiflag1_e)
      this.karaburiflag2_e=true;
    
    
    if((this.player.hitpoint==0||this.enemy.hitpoint==0)){
      this.dflag=true;
    }
    if(this.dflag&&!this.pre_dflag){
      this.decolate.tweener.clear().call(function(){
        gos.forEach(function(go,i){
          go.attackable=false;
        });
        app.fps=5;
      }).wait(1000).call(function(){
        app.fps=30;
      }).wait(1000).call(function(){
        gos.forEach(function(go,i){
          go.hitpoint=10;
          if(go.status=="dead"){
            go.object_ss.gotoAndPlay("wakeup");
            go.statusupdate();
            this.fflag=true;
          }
          this.dflag=false;
        },this);
      },this);
    }
    var clists2 = [this.clist1,this.clist2];
    var controlobj = null;
    clists2.forEach(function(clist,i){
      if(clist["entry"].parent.visible){
        var obj=clist["entry"].controlobj;
        if(obj.mode=="standby"&&obj.status=="idol"&&obj.target.mode=="standby"&&obj.target.status=="idol"){
          this.fflag = true;
          controlobj = obj;
        }
      }
    },this);
    if(this.fflag&&!this.pre_fflag){
      this.surface.hide();
      this.decolate.show();
      
      hpappear(0,this);
      hpappear2(0,this);
      this.ready.show();
      this.fight.hide();
      this.readySE.play();
      this.ready.tweener.clear().set({x: SCREEN_WIDTH/2,y: -18}).to({y: SCREEN_HEIGHT+18},1000,"easeOutInQuart").call(function(){
        this.ready.hide();
        this.fight.show();
        this.decolate.tweener.clear().wait(100).call(function(){this.fightSE.play();},this);
        this.fight.tweener.clear().set({x: SCREEN_WIDTH/2,y: -18}).to({y: SCREEN_HEIGHT+18},1000,"easeOutInQuart").call(function(){
          this.fight.hide();
          if(controlobj!=null){
            controlobj.inputable=true;
            controlobj.demo=false;
            controlobj.target.mode="safe";
            controlobj.target.demo=false;
          }
          gos.forEach(function(go,i){
            go.attackable=true;
          });
          this.fflag=false;
        },this);
      },this);
    }
    //console.log(this.enemy.mode,this.enemy.sitcounter,this.enemy.sit,this.enemy.input.down);
     //console.log(app.canvas.miterLimit);
 this.pre_fflag=this.fflag;
 this.pre_dflag=this.dflag;
  }
});

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    startLabel: 'main',   // MainScene から開始
    width: SCREEN_WIDTH,  // 画面幅
    height: SCREEN_HEIGHT,// 画面高さ
    assets: ASSETS,       // アセット読み込み
  });
  //app.enableStats();
  
  // 実行
  app.run();
});
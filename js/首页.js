window.onload=function(){
        var main=document.getElementById("main");
        var list=document.getElementById("list");
        var buttons=document.getElementById("buttons").getElementsByTagName("span");
        var prev=document.getElementById("prev");
        var next=document.getElementById("next");
        var index=1;
        var flag=false;
        var time;

        function showbutton(){
          for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
              buttons[i].className="";
              break;
            }
          }
          buttons[index-1].className="on";
        }

        function move(offset){
          flag=true;
          var time=300;//移动一张照片需要的总时
          var everymove=10;
          var distance=offset/(time/everymove);
          var newLeft=parseInt(list.style.left)+offset;
          function go(){
            if((distance<0&&parseInt(list.style.left)>newLeft)||(distance>0&&parseInt(list.style.left)<newLeft))
              {
                list.style.left=parseInt(list.style.left)+distance+"px";
                    setTimeout(go,everymove);
                }
          
             else{
          list.style.left=newLeft+"px";
          if(newLeft>-1300)
            list.style.left=-6500+"px";
          if(newLeft<-6500)
            list.style.left=-1300+"px";
            flag=false;
        }

          }
          go();
         }
        function play(){
          time=setInterval(function(){
            next.onclick();

          },5000);

        }
        function stop(){
          clearInterval(time);
        }
        next.onclick=function(){
          if(flag){return;}
          if(index==5){
            index=1;
          }
          else{
            index+=1;
          }

       
        
          showbutton();
           move(-1300);

        }
        prev.onclick=function(){
          if(flag){return;}
          if(index==1){
            index=5;
          }
          else{
            index-=1;
          }
        
          showbutton();
           move(1300);

        }
        for(var i=0;i<buttons.length;i++){
          buttons[i].onclick=function(){
            if(this.className=="on"){
              return;
            }
            var myIndex=parseInt(this.getAttribute("index"));
            var offset=-1300*(myIndex-index);
            move(offset);
            index=myIndex;
            showbutton();
          }
        }
        main.onmouseover=stop;
        main.onmouseout=play;
        play();
        function menu(){
          var menu=document.getElementsByClassName("menu")[0];
            menu.onmouseover=function(){func("block");}
            menu.onmouseout=function(){func("none");}
            function func(flag){
                  document.getElementsByTagName("dl")[0].style.display=flag;

            }
        }
        menu();
 } 

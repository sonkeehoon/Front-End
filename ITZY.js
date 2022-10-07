var Body={
            setColor : function (color){
                // document.querySelector('body').style.color = color;
                $('body').css('color',color);
            },
            setBgColor : function (color){
                $('body').css('backgroundColor',color);
            }
        }


function nightDayHandler(self){
        
    if (self.value === 'night mode'){
        Body.setColor('white');
        Body.setBgColor('black');
        self.value='day mode';
    } else {
        Body.setColor('black');
        Body.setBgColor('bisque');
        self.value='night mode';
    }
}

function showDate(){
    document.querySelector('#date').innerHTML=Date()
}

function setBtnDisable(self){
    // var btn=document.getElementById("submit_btn");
    var btn=document.getElementById(self.id);

        btn.disabled="disabled";
        btn.style.backgroundColor="grey"
}

function onFocusHandler(){
    var input=document.getElementById("name");
    input.value='';
}
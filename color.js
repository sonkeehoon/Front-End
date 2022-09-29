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
function powerOn() {
    "use strict";
    
    var screen = document.getElementById("screen"), tooltip = document.getElementById("tooltip");
    
    screen.classList.add("screenOff");
    
    document.getElementById('button').addEventListener('click', function () {
        if (this.classList.contains('off')) {
            this.classList.remove('off');
            this.classList.add('on');
                        
            screen.classList.remove("screenOff");
            screen.classList.add("screenOn");
            
            tooltip.classList.add("hidden");
        } else if (this.classList.contains('on')) {
            this.classList.remove('on');
            this.classList.add('off');
            
            screen.classList.remove("screenOn");
            screen.classList.add("screenOff");
        }
    });
}

powerOn();

// Author: Oli Ahammed Sarker;
//whats app: +8801627324997
class tabItem{
    constructor(){
        this.menuItemOne = document.getElementsByClassName('slider_lst');
        this.contentBox = document.getElementsByClassName('contentBox');
        this.image = document.querySelector('.slider');

        this.eventHandler();
    }
    eventHandler(){
        
        var i;
      for (i = 0; i < this.menuItemOne.length; i++) {


        this.menuItemOne[i].addEventListener('click',(e)=>{
            var i;
            for (i = 0; i < this.menuItemOne.length; i++) {
            this.menuItemOne[i].classList.remove('active');

          }
            this.callOutTerm(e,false);


         },false);
      };
      
       
for (i = 0; i < this.contentBox.length; i++) {
            this.contentBox[i].style.display = "none";
            this.contentBox[0].style.display = 'block';
      }


        // To remove this console remove it or make a comment thank
          console.log(
        
      );
    }
    callOutTerm(e){
        var i;
        for (i = 0; i < this.contentBox.length; i++) {
            this.contentBox[i].style.display = "none";

      }

     e.currentTarget.classList.add('active');

    document.getElementById(e.currentTarget.getAttribute('data-id')).style.display = 'block';
    let id = e.currentTarget.getAttribute('data-id');
     console.log(id);
     let direct = '#'+ id+' .slider_image > img';
     let sourceImage = document.querySelector(direct).getAttribute('src');
    // alert(sourceImage);
     this.image.setAttribute('style','background: url('+ sourceImage +')');
        
    }
}

const tab = new tabItem;
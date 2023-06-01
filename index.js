window.addEventListener('scroll', function(e) {
    console.log(this.window.scrollY);
    if(this.window.scrollY > 700){
      document.querySelector('header').style.color = "#222";
      document.querySelectorAll('header a').forEach((e)=>{
        e.style.color = "#222";
      });
    }
    else if(this.window.screenY > 1350){
      
    }
    else{
      document.querySelector('header').style.color = "white";
      document.querySelectorAll('header a').forEach((e)=>{
        e.style.color = "white";
      });
    }
    const bar = this.document.getElementById('bar');
    bar.style.width = (this.window.scrollY / 14.3)+"%";
  });
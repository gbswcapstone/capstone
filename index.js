window.addEventListener('scroll', function(e) {
    console.log(this.window.scrollY);
    if(this.window.scrollY == 721){
      
    }
    const bar = this.document.getElementById('bar');
    bar.style.width = (this.window.scrollY / 7)+"%";
  });
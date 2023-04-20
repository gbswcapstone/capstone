window.addEventListener('scroll', function(e) {
    console.log(this.window.scrollY);
    const bar = this.document.getElementById('bar');
    bar.style.width = (this.window.scrollY / 7)+"%";
  });
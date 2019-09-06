    function carregarVideo(){
        var urlvideo = document.getElementById('txturl').value
        var cod = ''
        var identificador = urlvideo.substring(28,29)        
        
        if(identificador == '?'){
            cod = urlvideo.substring(17,68)
            document.getElementById('ifVideo').src = "https://www.youtube.com/embed/" + cod
            document.getElementById('ifVideo').hidden = false
           
        
        } else{
            cod = urlvideo.substring(17,28)
            document.getElementById('ifVideo').src = "https://www.youtube.com/embed/" + cod
            document.getElementById('ifVideo').hidden = false
        }
        document.getElementById('mostrar').hidden = false
        ocutarControles()
        tamanhoTela()
                
        
    }
    function ocutarControles(){
      
        document.getElementById('dvcontrole').hidden = true
        document.getElementById('imgLogo').hidden = true
        document.getElementById('mostrar').hidden = false
    }
    function mostrarControles(){
        document.getElementById('dvcontrole').hidden = false
        document.getElementById('mostrar').hidden = true
    }

    function tamanhoTela(){
      var screen = window.innerWidth / window.innerHeight

       if(screen < 1.77){
            document.getElementById('ifVideo').width = window.innerWidth - 32
            document.getElementById('ifVideo').height = (document.getElementById('ifVideo').width / 16) * 9
           // alert(`screen: < ${screen}`)
        } else {
            document.getElementById('ifVideo').height = window.innerHeight - 18
            document.getElementById('ifVideo').width = (document.getElementById('ifVideo').height / 9) * 16 
           // alert(`screen: > ${screen}`)   
        }
          
    }
    window.addEventListener('resize', function(){
        tamanhoTela();
    });


  //  imgApp.setAttribute('id', 'imgApp')
  //  imgApp.setAttribute('src', 'youtube-icon.png')
  //  logo.appendChild(imgApp)

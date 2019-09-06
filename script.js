    function carregarVideo(){
        var urlvideo = document.getElementById('txturl').value
        var cod = ''
        var identificador = urlvideo.substring(8,16)  
        ocutarControles()              
        if(identificador == 'youtu.be'){
            identificador = urlvideo.substring(28,29)
            if(identificador == '?'){
            //lista
            cod = urlvideo.substring(17,68)
            document.getElementById('ifVideo').src = "https://www.youtube.com/embed/" + cod
            document.getElementById('ifVideo').hidden = false
            } else{
            //Vídeo
            cod = urlvideo.substring(17,28)
            document.getElementById('ifVideo').src = "https://www.youtube.com/embed/" + cod
            document.getElementById('ifVideo').hidden = false
            }
        } else if(identificador == 'www.yout'){
            identificador = urlvideo.substring(29,30)
            if(identificador == '?'){
            //lista
            var list = '?list=' + urlvideo.substring(49,83)
            cod = urlvideo.substring(32,43)
            document.getElementById('ifVideo').src = "https://www.youtube.com/embed/" + cod + list
            document.getElementById('ifVideo').hidden = false
            } else{
            //Vídeo
            cod = urlvideo.substring(32,43)
            document.getElementById('ifVideo').src = "https://www.youtube.com/embed/" + cod
            document.getElementById('ifVideo').hidden = false
            }    
            
        } else{
            alert('Url do Vídeo Invalida')
            mostrarControles()
        }
        
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

    function Skin(){
        var modo = document.getElementById('btSkin').value
        if (modo == 'Modo Dark'){ 
            document.getElementById('btSkin').value = 'Modo Light'
            document.getElementById('css').href = 'styleDark.css'
        } else if (modo == 'Modo Light'){
            document.getElementById('btSkin').value = 'Modo Dark'
            document.getElementById('css').href = 'styleLight.css'
        }
    }

    

  

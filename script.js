
    
    var aritmetikOrt= document.querySelector('.aritmetikOrt');
    var geometrikOrt= document.querySelector('.geometrikOrt');
    var harmonikOrt= document.querySelector('.harmonikOrt');
    var mods= document.querySelector('.mod');
    var medyans= document.querySelector('.medyan');
    var standartSapmas= document.querySelector('.standartSapma');
    

    var dizi= document.querySelector('.sayilar');

    function aritmetikOrtalama(item) {
        var ayrac= item.split(" ");
         var total=0;
         var cevir;
         ayrac.forEach(item => {
             cevir = Number(item)
               total+=cevir;
         });
 
         return total/ayrac.length;
         
         
    }

    function geometrikOrtalama(item) {
        var ayrac= item.split(" ");
         var start=1;
         var cevir;
         var flag = 0;
         ayrac.forEach(item => {
            cevir = Number(item)

            if(cevir < 0)
            {
                flag = 1;
                
            }
            start*=cevir;
        });

        if(flag == 0)
        {
            return Math.pow(start, (1/ayrac.length));
        }
        else 
        {
            alert("Girilen değerler pozitif sayılardan oluşmalıdır!");
            return;
            
        }
            
    };   
    

    function harmonikOrtalama(item) {
        var ayrac= item.split(" ");
        var sonuc= 0;
        var cevir;
        
         ayrac.forEach(item => {
            cevir = Number(item)
            sonuc+=(1/cevir);
         });
         
         return ayrac.length / sonuc;   
    }

    function mod(item) {
            
        var ayrac=item.split(" ");
        var sayidizi=[];
        var modes=[];
        var count=[];
        var i, j;
        var number;
        var maxIndex=0;

        for(i=0;i<ayrac.length;i++){
            sayidizi[i]=parseInt(ayrac[i]);
        }
        for (j=0;j<ayrac.length;j++){
            number=sayidizi[j];
            count[number]=(count[number]||0)+1;
            if(count[number]>maxIndex){
                maxIndex=count[number];
            }
        }
        for(j in count){
            if(count.hasOwnProperty(j)){
                if(count[j]==maxIndex){
                    modes.push(Number(j));
                }
            }
        }   
        return modes;   
    }

    function medyan(item) {
        var ayrac= item.split(" ");
        var i = 0;
        var arr = [];
        var numsLen = ayrac.length;
        
        ayrac.forEach(item => {
            cevir = parseInt(item)
            ayrac[i] = cevir;
            i++;  
            
        });
        var siraliDizi = ayrac.sort(function(a, b){return a - b});
        
        alert(ayrac);
        
         if (numsLen % 2 == 0 ) {
            medyandeger = (siraliDizi[numsLen / 2 - 1] + siraliDizi[numsLen / 2]) / 2;
         } else { 
            medyandeger = siraliDizi[(numsLen - 1) / 2];
         }
      
        return medyandeger;  
     }
     function standartSapma(item) {
        var ayrac= item.split(" ");
        var ortalama = aritmetikOrtalama(item);
        
        var i;
        var toplam = 0;
        var sayidizi = [];
        
        for(i=0;i<ayrac.length;i++){
            sayidizi[i]=parseInt(ayrac[i]);
            toplam += (sayidizi[i] - ortalama)*(sayidizi[i] - ortalama);
        }
        return Math.sqrt(toplam/(ayrac.length-1));
         
     }
     function factoriyel(n)
     {
        var i;
        var sonuc = 1;
        if(n > 0)
        {
            for(i = n ; i>0 ; i--){
                sonuc *= i;
                
            }
            return sonuc;
        }
        else if(n == 0){
            return 1;
        }
        
     }
     //////////////////////////////
    aritmetikOrt.addEventListener('click',function(){
    
        alert(aritmetikOrtalama(dizi.value));
         
    })
    geometrikOrt.addEventListener('click',function(){
    
        
         alert(geometrikOrtalama(dizi.value));
          
     })

     harmonikOrt.addEventListener('click',function(){
    
         
         alert(harmonikOrtalama(dizi.value));
          
     })

     mods.addEventListener('click',function(){
    
         
         alert(mod(dizi.value));
          
     })
     
     medyans.addEventListener('click',function(){
    
         
         alert(medyan(dizi.value));
          
     })
    
     standartSapmas.addEventListener('click',function(){
    
         alert(standartSapma(dizi.value));
          
     })

     

     

     function permutasyon() {
        var n = Number(window.prompt("Eleman Sayısı (n):",0));
        var r = Number(window.prompt("Seçim Sayısı (r) :",0));
        if(n<0 || r<0){
            alert("n ve r değerleri negatif olamaz.");
            return permutasyon(); 
        }
        if(n >= r){
            alert("işlem başarılı! Sonucu görüntülemek için tamam butonuna basınız.");
            alert(factoriyel(n)/factoriyel(n-r));
        }
        else
        {
            alert("n değeriniz r den küçük olamaz! Lütfen tekrar deneyiniz");
            return permutasyon();
        }
     } 
     
     
     function kombinasyon() {
        var n = Number(window.prompt("Eleman Sayısı (n):",0));
        var r = Number(window.prompt("Seçim Sayısı (r) :",0));
        if(n<0 || r<0){
            alert("n ve r değerleri negatif olamaz.");
            return kombinasyon(); 
        }
        if(n >= r && n>=0 && r>=0){
            alert("işlem başarılı! Sonucu görüntülemek için tamam butonuna basınız.");
            alert(factoriyel(n)/(factoriyel(n-r)*factoriyel(r)));
            
        }
        else
        {
            alert("n değeriniz r den küçük olamaz! Lütfen tekrar deneyiniz");
            return kombinasyon();
        }
     } 
    



    
    var aritmetikOrt= document.querySelector('.aritmetikOrt');
    var geometrikOrt= document.querySelector('.geometrikOrt');
    var harmonikOrt= document.querySelector('.harmonikOrt');
    var mod= document.querySelector('.mod');
    var medyan= document.querySelector('.medyan');
    var standartSapma= document.querySelector('.standartSapma');
    var permutasyon= document.querySelector('.permutasyon');
    var kombinasyon= document.querySelector('.kombinasyon');

    var dizi= document.querySelector('.sayilar');
   
    aritmetikOrt.addEventListener('click',function(){
    
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
        alert(aritmetikOrtalama(dizi.value));
         
    })
    geometrikOrt.addEventListener('click',function(){
    
        function geometrikOrtalama(item) {
            var ayrac= item.split(" ");
             var start=1;
             var cevir;
             ayrac.forEach(item => {
                cevir = Number(item)
                start*=cevir;
             });
             return Math.pow(start, (1/ayrac.length));   
         } 
         alert(geometrikOrtalama(dizi.value));
          
     })

     harmonikOrt.addEventListener('click',function(){
    
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
         alert(harmonikOrtalama(dizi.value));
          
     })

     mod.addEventListener('click',function(){
    
        function mod(item) {
            
            var i, j,z, tmp, maxCount, modeValue;
            var ayrac= item.split(" ");
            var tally = [ayrac.length];
                
                 for(i=0;i<ayrac.length;i++)
                     {
                           for(j=0;j<ayrac.length-i;j++)
                           {
                                 if(invalue[j]>invalue[j+1])
                                 {
                                       tmp=invalue[j];
                                       invalue[j]=invalue[j+1];
                                       invalue[j+1]=tmp;
                                 }
                           }
                     }
                for (i = 0; i < ayrac.length; i++) 
                {
                    for(z=i+1;z<ayrac.length;z++)
                    {
                        
                        if(invalue[i]==invalue[z])
                        {
                            tally[i]++;
                        }
                    }
                }
                
                
                maxCount = 0;
                modeValue = 0;
                for (i = 1; i <= ayrac.length; i++) 
                {
                    if (tally[i] > maxCount) 
                    {
                        maxCount = tally[i];
                        modeValue = invalue[i];
                    }
                }
                return modeValue;
                
            




            // var ayrac= item.split(" ");
            // var modes = [], count = [] , i, number, maxIndex = 0;
            
            // for (i = 0; i < ayrac.length; i++) {
            //     number = ayrac[i];
            //     count[number]++;
            //     if (count[number] > maxIndex) {
            //         maxIndex = count[number];
            //     }
            // }
         
            
            //     for(i = 0;i<ayrac.length;i++){
            //         if (count[i] == maxIndex) {
            //             modes.push(i);
            //         }
            //     }

             
            
            // return modes;   
         } 
         alert(mod(dizi.value));
          
     })
     
     medyan.addEventListener('click',function(){
    
        function medyan(item) {
            var ayrac= item.split(" ");
            var medyandeger = 0, numsLen = ayrac.length;
            

            ayrac.forEach(item => {
                cevir = Number(item);
             });
            ayrac.sort();
            
            if (numsLen % 2 == 0 ) {
                medyandeger = (ayrac[numsLen / 2 - 1] + ayrac[numsLen / 2]) / 2;
            } else { 
                medyandeger = ayrac[(numsLen - 1) / 2];
            }
          
            return medyandeger;   
         } 
         alert(medyan(dizi.value));
          
     })
    
     standartSapma.addEventListener('click',function(){
    
        function standartSapma(item) {
            var ayrac= item.split(" ");
            var ortalama = aritmetikOrt(dizi.value);
            
             ayrac.forEach(item => {
                 cevir = Number(item)
                   total+=Math.pow((ortalama-cevir),2);
             });
     
             return Math.sqrt(total*(1/ayrac.length-1));
             
         } 
         alert(standartSapma(dizi.value));
          
     })
     permutasyon.addEventListener('click',function(){
    
        function permutasyon() {
            var n = Number(window.prompt("Kaç değer gireceksiniz n:",0));
            var r = Number(window.prompt("Kaç değer gireceksiniz r :",0));
            if(n >= r){
                alert("işlem başarılı! Sonucu görüntülemek için tamam butonuna basınız.");
                return factoriyel(n)/factoriyel(n-r);
            }
            else
            {
                alert("n değeriniz r den küçük olamaz! Lütfen tekrar deneyiniz");
                return permutasyon();
            }
         } 
             
         
         alert(permutasyon());
          
     })

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
     kombinasyon.addEventListener('click',function(){
    
        function kombinasyon() {
            var n = Number(window.prompt("Kaç değer gireceksiniz n:",0));
            var r = Number(window.prompt("Kaç değer gireceksiniz r :",0));
            if(n >= r && n>=0 && r>=0){
                alert("işlem başarılı! Sonucu görüntülemek için tamam butonuna basınız.");
                return factoriyel(n)/(factoriyel(n-r)*factoriyel(r));
            }
            else
            {
                alert("n değeriniz r den küçük olamaz! Lütfen tekrar deneyiniz");
                return kombinasyon();
            }
         } 
         
         alert(kombinasyon());
          
     })


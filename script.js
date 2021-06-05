    var aritmetikOrt= document.querySelector('.aritmetikOrt');
    var geometrikOrt= document.querySelector('.geometrikOrt');
    var harmonikOrt= document.querySelector('.harmonikOrt');
    var mods= document.querySelector('.mod');
    var medyans= document.querySelector('.medyan');
    var standartSapmas= document.querySelector('.standartSapma');
    var varyanss = document.querySelector('.varyans');
    var acikliks = document.querySelector('.aciklik');
    var standartSapmak= document.querySelector('.standartSapma1');
    var varyansk = document.querySelector('.varyans1');

    var dizi= document.querySelector('.sayilar');


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
     standartSapmak.addEventListener('click',function(){
        alert(standartSapma1(dizi.value)); 
    })

     varyanss.addEventListener('click',function(){
        alert(varyans(dizi.value)); 
    })
    varyansk.addEventListener('click',function(){
        alert(varyans1(dizi.value)); 
    })
    
    acikliks.addEventListener('click',function(){
        alert(aciklik(dizi.value));
    })




//Aritmetik Ortalama hesaplama fonksiyonu
    function aritmetikOrtalama(item) {
        var ayrac= item.split(" ");
         var total=0;
         var cevir;
         
        ayrac.forEach(item => {
             cevir = Number(item)
               total+=cevir;
         });
 
         if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }
        return total/ayrac.length;
         
         
    }
//Geometrik Ortalama hesaplama fonksiyonu
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

        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }
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
    
//harmonik Ortalama hesaplama fonksiyonu
    function harmonikOrtalama(item) {
        var ayrac= item.split(" ");
        var sonuc= 0;
        var cevir;
        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }
         ayrac.forEach(item => {
            cevir = Number(item)
            sonuc+=(1/cevir);
         });
         
         return ayrac.length / sonuc;   
    }
//Mod hesaplama fonksiyonu
    function mod(item) {
            
        var ayrac=item.split(" ");
        var sayidizisi=[];
        var modes=[];
        var count=[];
        var i, j;
        var number;
        var maxIndex=0;

        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }

        for(i=0;i<ayrac.length;i++){
            sayidizisi[i]=parseInt(ayrac[i]);
        } 
        for (j=0;j<ayrac.length;j++){
            number=sayidizisi[j];
            count[number]=(count[number]||0)+1;
            if(count[number]>maxIndex){
                maxIndex=count[number];
            }
        }
        if(maxIndex == 1)
        {
            alert("Tekrar eden sayı olmadığı için mod yoktur!")
            return;
        }
        for(j in count){
            if(count.hasOwnProperty(j)){
                if(count[j]==maxIndex ){
                    
                    modes.push(Number(j));
                }
                
                
            }
        }
    
        
        return modes;   
    }
//medyan hesaplama fonksiyonu
    function medyan(item) {
        var ayrac= item.split(" ");
        var i = 0;
        var arr = [];
        var numsLen = ayrac.length;
        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }        
        ayrac.forEach(item => {
            cevir = parseInt(item)
            ayrac[i] = cevir;
            i++;  
            
        });
        var siraliDizi = ayrac.sort(function(a, b){return a - b});
        
         if (numsLen % 2 == 0 ) {
            medyandeger = (siraliDizi[numsLen / 2 - 1] + siraliDizi[numsLen / 2]) / 2;
         } else { 
            medyandeger = siraliDizi[(numsLen - 1) / 2];
         }
      
        return medyandeger;  
     }
//Sample Standart Sapma hesaplama fonksiyonu
     function standartSapma(item) {
        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }
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
     //Popülasyon Standart Sapma hesaplama fonksiyonu
     function standartSapma1(item) {
        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }
        var ayrac= item.split(" ");
        var ortalama = aritmetikOrtalama(item);
        
        var i;
        var toplam = 0;
        var sayidizi = [];

        
        
        for(i=0;i<ayrac.length;i++){
            sayidizi[i]=parseInt(ayrac[i]);
            toplam += (sayidizi[i] - ortalama)*(sayidizi[i] - ortalama);
        }
        return Math.sqrt(toplam/(ayrac.length));
         
     }
     //sample varyans hesaplama fonksiyonu 
     function varyans(item)
     {
        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }

        var ayrac= item.split(" ");
        var ortalama = aritmetikOrtalama(item);
        
        var i;
        var toplam = 0;
        var sayidizi = [];
        
        for(i=0;i<ayrac.length;i++){
            sayidizi[i]=parseInt(ayrac[i]);
            toplam += (sayidizi[i] - ortalama)*(sayidizi[i] - ortalama);
        }
        return toplam/(ayrac.length-1);
     }
    //popülasyon varyansı hesaplama
     function varyans1(item)
     {
        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }

        var ayrac= item.split(" ");
        var ortalama = aritmetikOrtalama(item);
        
        var i;
        var toplam = 0;
        var sayidizi = [];
        
        for(i=0;i<ayrac.length;i++){
            sayidizi[i]=parseInt(ayrac[i]);
            toplam += (sayidizi[i] - ortalama)*(sayidizi[i] - ortalama);
        }
        return toplam/(ayrac.length);
     }
     //ara işlem için faktöriyel hesaplama fonksiyonu
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
//Ranj hesaplama fonksiyonu
     function aciklik(item)
     {
        var ayrac= item.split(" ");
        var i = 0;
        
        if (!item) {
            alert("Lütfen veri girişi yapınız.");
            return;
        }        
        ayrac.forEach(item => {
            cevir = parseInt(item)
            ayrac[i] = cevir;
            i++;  
            
        });

        var siraliDizi = ayrac.sort(function(a, b){return a - b});
        return siraliDizi[ayrac.length-1] - siraliDizi[0];
     }
 //permütasyon hesaplama fonksiyonu
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
//Kombinasyon hesaplama fonksiyonu
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
    


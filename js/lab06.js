
   function buyDough ()
   {
       var DoughTyp = prompt("Pink or Yellow Glazed Doughnut?", 'pink');
   
       while(DoughTyp !== "pink" && DoughTyp !== "yellow")
       {
           DoughTyp = prompt ('(pink) or (yellow) Glazed Doughnut?');
           
       }
   
       var pickedItem = '';
       
       if (DoughTyp == "pink")
       {
           
               pickedItem = '<img src="pinkk.png" style="width:200px">';
           
   
       } else if (DoughTyp == "yellow")
       {
        
               pickedItem = '<img src="yelloww.png" style="width:230px">';
       }
   
       var DoughNum = prompt("How Many Doughnut?",'1');
   
       var picturesArray = '';
   
       for ( i=0; i<DoughNum ; i++ )
       {
   picturesArray= picturesArray + pickedItem;
       }
   
       document.write(picturesArray);
   
    }

    buyDough ();
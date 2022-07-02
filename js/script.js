/*$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var name = a.data('name') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    console.log(name);
    var modal = $(this)
    modal.find('.modal-title').text(name)
    //modal.find('.modal-body input').val(recipient)
  })
*/
  //grab the data-name value from the <A> tag

  //populate the modal title with value in data-name

  // grab the ID of the <A> and populate the carousel up to 3 pics so ID1, ID2, ID3
  
document.getElementById("ChaosLord").addEventListener("click", function()
    {
        let title = document.getElementById("ChaosLord").getAttribute('data-name');
        document.querySelector(".modal-title").innerHTML = title; 
        let body1 = document.getElementById('firstSlide');
        let body2 = document.getElementById('secondSlide');
        let body3 = document.getElementById('thirdSlide');
        body1.setAttribute("src", "images/Singles/csmLord/ChaosLord1.JPG");
        body2.setAttribute("src", "images/Singles/csmLord/ChaosLord2.JPG");
        body3.setAttribute("src", "images/Singles/csmLord/ChaosLord3.JPG");
    }
  )


  
document.getElementById("Engiseer").addEventListener("click", function()
  {
      let title = document.getElementById("Engiseer").getAttribute('data-name');
      document.querySelector(".modal-title").innerHTML = title; 
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/enginseer/Engiseer1.JPG");
      body2.setAttribute("src", "images/Singles/enginseer/Engiseer2.JPG");
      body3.setAttribute("src", "images/Singles/enginseer/Engiseer4.JPG");
     
   
  }
)

document.getElementById("GaellicGaurdianVetSrgt").addEventListener("click", function()
  {
      let title = document.getElementById("GaellicGaurdianVetSrgt").getAttribute('data-name');
      document.querySelector(".modal-title").innerHTML = title;
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/gaullicGaurd/GaellicGaurdianVetSrgt1.JPG");
      body2.setAttribute("src", "images/Singles/gaullicGaurd/GaellicGaurdianVetSrgt2.JPG");
      body3.setAttribute("src", "images/Singles/gaullicGaurd/GaellicGaurdianVetSrgt4.jpg");

  }
)
document.getElementById("IGHero").addEventListener("click", function()
  {
      let title = document.getElementById("IGHero").getAttribute('data-name');
      document.querySelector(".modal-title").innerHTML = title; 
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/cadianCaptain/IGHero.JPG");
      body2.setAttribute("src", "images/Singles/cadianCaptain/IGHero1.JPG");
      body3.setAttribute("src", "images/Singles/cadianCaptain/IGHero2.JPG");

  }
)
document.getElementById("Tyrant").addEventListener("click", function()
  {
      let title = document.getElementById("Tyrant").getAttribute('data-name');
      document.querySelector(".modal-title").innerHTML = title; 
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/ogreTyrant/Tyrant1.JPG");
      body2.setAttribute("src", "images/Singles/ogreTyrant/Tyrant4.JPG");
      body3.setAttribute("src", "images/Singles/ogreTyrant/Tyrant5.JPG");

  }
)
document.getElementById("OldBlood").addEventListener("click", function()
  {
      let title = document.getElementById("OldBlood").getAttribute('data-name');
      document.querySelector(".modal-title").innerHTML = title; 
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/oldOneMounted/OldBlood1.JPG");
      body2.setAttribute("src", "images/Singles/oldOneMounted/OldBlood2.JPG");
      body3.setAttribute("src", "images/Singles/oldOneMounted/OldBlood3.JPG");

  }
)
document.getElementById("VahallanCapt").addEventListener("click", function()
  {
      let title = document.getElementById("VahallanCapt").getAttribute('data-name');
      console.log(title);
      document.querySelector(".modal-title").innerHTML = title; 
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/vahallan/VahallanCapt1.JPG");
      body2.setAttribute("src", "images/Singles/vahallan/VahallanCapt2.JPG");
      body3.setAttribute("src", "images/Singles/vahallan/VahallanCapt3.JPG");

  }
)
document.getElementById("SkinkPriest").addEventListener("click", function()
  {
      let title = document.getElementById("SkinkPriest").getAttribute('data-name');
      console.log(title);
      document.querySelector(".modal-title").innerHTML = title; 
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/skinkPriest/SkinkPriest1.JPG");
      body2.setAttribute("src", "images/Singles/skinkPriest/SkinkPriest2.JPG");
      body3.setAttribute("src", "images/Singles/skinkPriest/SkinkPriest3.JPG");

  }
)

document.getElementById("BeastLord").addEventListener("click", function()
  {
      let title = document.getElementById("BeastLord").getAttribute('data-name');
      console.log(title);
      document.querySelector(".modal-title").innerHTML = title; 
      let body1 = document.getElementById('firstSlide');
      let body2 = document.getElementById('secondSlide');
      let body3 = document.getElementById('thirdSlide');
      body1.setAttribute("src", "images/Singles/beastlord/BeastLord2.JPG");
      body2.setAttribute("src", "images/Singles/beastlord/BeastLord1.JPG");
      body3.setAttribute("src", "images/Singles/beastlord/BeastLord3.JPG");

  }
)

//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty")
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if (key.which === 71){
      alert('You pressed the G key!')
    }
  })
}
function submitIt(){
  $(document).on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}


$(document).ready(function(){
  
getIt()
frameIt()
pressIt()
submitIt()
});


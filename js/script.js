function textChange(){
	document.getElementById('h2') .innerHTML = "LIKE MY FB PAGE" ;
}

function textDiff(){
	document.getElementsByClassName('c_h2')[1].innerHTML =" its not you";
}

function date_Change(){
    document.getElementById('d').innerHTML = Date()
 }

 function repeat(){
 	let str = "Hellow world"
 	document.getElementById('a').innerHTML = str.repeat(3) ;
 }
 function replace(){
 	let str = document.getElementById('r').innerHTML;
 	document.getElementById('r').innerHTML = str.replace("rahman","asif");
 }
 function search(){
 	let str = "WHO" ;
 	document.getElementById('s').innerHTML = str.search("WHO") ;
 }
 function slice(){
 	let str ="rahman" ;
 	document.getElementById('slice').innerHTML = str.slice("0.2") ;
 }
 function split(){
 	let str ="How are you doing?" ;
 	const myArr = str.split(" ");
 	document.getElementById('split').innerHTML = myArr;
 }

function text_Change(){
    var text = "welcome to my page" ;
    document.getElementById('text').innerHTML = text.repeat(3);
 }

function street(){
    document.getElementById('street') .style.fontSize ="50px";
}

function street_2(){
    document.getElementById('street_2') .style.color ="red";
}

function street_3(){
    document.getElementById('street_3') .style.backgroundColor ="yellow";
}

function street_4(){
    document.getElementById('street_4') .style.border ="1px solid";
}

function image_1(){
    document.getElementById('img').src ="images/work.jpg";
}

function image_2(){
    document.getElementById('img').src ="images/mobile.png";
}

function image_3(){
    document.getElementById('img_3').src ="images/work.jpg";
}

function image_4(){
    document.getElementById('img_3').src ="images/mobile.png";
}

function image_5(){
    document.getElementById('img_4').src ="images/work.jpg";
}

function image_6(){
    document.getElementById('img_4').src ="images/mobile.png";
}

function image_7(){
    document.getElementById('img_5').src ="images/work.jpg";
}

function image_8(){
    document.getElementById('img_5').src ="images/mobile.png";
}
function alertMessage(){
    alert('successfully done');
}

function alertMessage_1(){
    document.write("hello yahoooooo");
}

function login(){
   console.log("hello ssb");
}

// JQ start

$(document).ready(function (){
    alert("Welcome to my page");
});

$(document).ready(function (){
    //alert message start
    $('button').click(function(){
      alert("WELCOME TO MY WEB");
    })
    //alert message end
});

$(document).ready(function(){
    $('.bu').click(function(){
        alert('welcome here');
    })
});

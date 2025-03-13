$(document).ready(function(){



    var x = 10;
    var y = x **3;
    var z = x + "Test";
    x +=5 
    $("#result3").html("X = "+x+"<br/>Y = "+y+"<br/>Z = "+z);

    var myName = "Darryl";
    var num1 = 10;
    var num2 = 15;
    let total = num1 + num2;

    $("#result2").html("<p class='fw-bold'>My Name: "+myName+"</p><p class='fw-bold'>Num1= "+num1+", Num2="+num2+"<p class='fw-bold'>Total: "+total);


setTimeout(function(){
//Clock
    setInterval(function(){
        var myDate = new Date();
        $("#span").html(
            (myDate.format('H:i'))
        );
    },1000);
//Clock
},1500)



$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        
        if ($(this).scrollTop() < 1 && !$("#navbarText").hasClass("show")){
            
            $nav.removeClass('ease');

        }
        else {

            $nav.addClass('ease');
            

        }
      });
  });

  $(".navbar-toggler").click(function(){


    if ($(document).scrollTop() < 1){

        $(".navbar").toggleClass('ease');

    }
    else {
        //Do nothing//
    }


  });


$(".card").click(function(){
    $(".player_audio").trigger('play');
})


$("#htmlm").click(function(){
    $("#nbrand").html("<a class='navbar-brand' style=' margin-right: 0 !important;' href='https://en.wikipedia.org/wiki/HTML5' target='_blank'><img src='./asset/img/HTML5.png' alt='' width='30' height='30' class='d-inline-block align-text-top'></a>");
    $("#video").html("<iframe width='450' height='200' src='https://www.youtube.com/embed/UB1O30fR-EE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>").fadeIn("slow");
    $("#ModalLabel").text("HTML5");
    $("#modaltext").text("HTML is at the core of every website, it's the language used to create a webpage's structure, the 5th revision offers many features in comparison to the first revision launched in 1993.");
    setTimeout(function(){
        $('#infoModal').modal('show'); 
    },50);

});

$("#jsm").click(function(){
    $("#nbrand").html("<a class='navbar-brand' style=' margin-right: 0 !important;' href='https://en.wikipedia.org/wiki/JavaScript' target='_blank'><img src='./asset/img/JAVASCRIPT.png' alt='' width='30' height='30' class='d-inline-block align-text-top'></a>");
    $("#ModalLabel").text("JavaScript");
    $("#modaltext").text("JavaScript is a programming language used to create interactivity within webpages, it features many funtions, one such function is Ajax, which allows for asynchronous page updates. This modal was made possible through JavaScript!");
    $("#video").html("<iframe width='450' height='200' src='https://www.youtube.com/embed/W6NZfCO5SIk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>").fadeIn("slow");
    setTimeout(function(){
        $('#infoModal').modal('show'); 
    },50);
});

$("#cssm").click(function(){
    $("#nbrand").html("<a class='navbar-brand' style=' margin-right: 0 !important;' href='https://en.wikipedia.org/wiki/CSS' target='_blank'><img src='./asset/img/CSS3.png' alt='' width='30' height='30' class='d-inline-block align-text-top'></a>");
    $("#ModalLabel").text("CSS");
    $("#modaltext").text("CSS a very powerful styling language, used in conjunction with HTML to apply styling to every webpage you visit, the styling of this page was created with Bootstrap, a CSS library.");
    $("#video").html("<iframe width='450' height='200' src='https://www.youtube.com/embed/yfoY53QXEnI' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>").fadeIn("slow");
    setTimeout(function(){
        $('#infoModal').modal('show'); 
    },50);
});

$("#uim").click(function(){
    $("#nbrand").html("<a class='navbar-brand' style=' margin-right: 0 !important;' href='https://en.wikipedia.org/wiki/User_interface' target='_blank'><img src='./asset/img/ui.png' alt='' width='30' height='30' class='d-inline-block align-text-top'></a>");
    $("#video").html("");
    $("#ModalLabel").text("User Interface");
    $("#modaltext").text("UI is the presentation of webpages, applications and operating systems etc. The point at which a person interacts with any form of software.");
    $('#infoModal').modal('show'); 
});

$("#iam").click(function(){
    $("#nbrand").html("<a class='navbar-brand' style=' margin-right: 0 !important;' href='https://en.wikipedia.org/wiki/Information_architecture' target='_blank'><img src='./asset/img/ia.png' alt='' width='30' height='30' class='d-inline-block align-text-top'></a>");
    $("#video").html("");
    $("#ModalLabel").text("Infrormation Architecture");
    $("#modaltext").text("Inofrmation architecture is about website structure, the usability of a design, how the website functions, how links and objects can be grouped to make logical sense.");
    $('#infoModal').modal('show'); 
});

$("#uxm").click(function(){
    $("#nbrand").html("<a class='navbar-brand' style=' margin-right: 0 !important;' href='https://en.wikipedia.org/wiki/User_experience' target='_blank'><img src='./asset/img/ux.png' alt='' width='30' height='30' class='d-inline-block align-text-top'></a>");
    $("#video").html("");
    $("#ModalLabel").text("User Experience");
    $("#modaltext").text("UX is the understanding of users, meeting their needs in regard to how someting is expected to function, making the design of any software as simplistic as possible.");
    $('#infoModal').modal('show'); 
});




$("#phonem").click(function(){
    $("#nbrand").html("<svg xmlns='http://www.w3.org/2000/svg'  width='30' height='30' fill='black' class='bi bi-telephone-fill' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'/></svg>");
    $("#video").html("");
    $("#ModalLabel").text("Phone");
    $("#action").html("<a class='btn btn-secondary' href='tel:02392848484'>Call</a><button type='button' class='btn btn-primary sp' data-bs-dismiss='modal'>Close</button>")
    $("#modaltext").html("You can call me on <strong>023 9284 8484</strong>.");
    $('#infoModal').modal('show'); 
});

$("#messm").click(function(){
    $("#nbrand").html("<svg xmlns='http://www.w3.org/2000/svg' fill='black' width='30' height='30' class='bi bi-chat-text-fill' viewBox='0 0 16 16'><path d='M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z'/></svg>");
    $("#video").html("");
    $("#ModalLabel").text("Message");
    $("#action").html("<a class='btn btn-secondary' data-bs-dismiss='modal''>Send</a><button type='button' class='btn btn-primary sp' data-bs-dismiss='modal'>Close</button>")
    $("#modaltext").html("<form><div class='mb-3'><label for='exampleInputEmail1' class='form-label'>Your email address</label><input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'><div id='emailHelp' class='form-text'>We'll never share your email with anyone else.</div></div><div class='mb-3'><label for='exampleFormControlTextarea1'>Message</label><textarea class='form-control' id='exampleFormControlTextarea1' rows='3'></textarea></div><div class='mb-3 form-check'><input type='checkbox' class='form-check-input' id='exampleCheck1'><label class='form-check-label' for='exampleCheck1'>I agree to the terms</label></div></form>");
    $('#infoModal').modal('show'); 
});

$("#emlm").click(function(){
    $("#nbrand").html("<svg xmlns='http://www.w3.org/2000/svg' height='30' width='30' fill='black' class='bi bi-envelope-fill' viewBox='0 0 16 16'><path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z'/></svg>");
    $("#video").html("");
    $("#ModalLabel").text("Email");
    $("#action").html("<a class='btn btn-secondary' href='mailto:up955361@myport.ac.uk'>Mail</a><button type='button' class='btn btn-primary sp' data-bs-dismiss='modal'>Close</button>")
    $("#modaltext").html("You can email me on <strong>UP955361@myport.ac.uk</strong>.");
    $('#infoModal').modal('show'); 
});

});
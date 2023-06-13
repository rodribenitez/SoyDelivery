var btnChat = document.getElementById('btnChat');
var chatContainer = document.getElementById("chat-container");
var btnChatClose = document.getElementById("chat-close")

// mobile
var btnContact = document.getElementById("contact");
var sub_menu = document.getElementById("sub_menu");
var btnHambuerger = document.getElementById("icon_hamburger")
var drop_menu =  document.getElementById("drop_menu")

//desktop
var sub_menu_desktop = document.getElementById("sub-menu-desktop")
var btnContactDesktop = document.getElementById("contact-desktop")


/* chat */
btnChat.addEventListener('click', function() {
    chatContainer.classList.toggle('chat-block');
  });

  btnChatClose.addEventListener('click', () =>{
    chatContainer.classList.toggle('chat-block');
  })


 /* Mobile */
  btnHambuerger.addEventListener('click', () =>{
    drop_menu.classList.toggle('dropdown_menu-visible')
    if (sub_menu.classList.contains('sub_menu-visible')) {
        sub_menu.classList.remove('sub_menu-visible')
    }
     
  })

  btnContact.addEventListener('click', () =>{
    sub_menu.classList.toggle('sub_menu-visible')
  } )


  /* desktop */

btnContactDesktop.addEventListener('click' , () =>{
  console.log(btnContactDesktop);
  sub_menu_desktop.classList.toggle("sub-menu-desktop-visible")

})






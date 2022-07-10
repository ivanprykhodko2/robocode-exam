let open_login = document.querySelector('#button-open-Login');
let close_login = document.querySelector('#registration_form_close');
let sign_up_form_close = document.querySelector('#sign_up_form_close')
let registration_form = document.querySelector('#registration_form');
let login_button = document.querySelector('#Login_button');
let registration_field_open = document.querySelector('#registration_field_open');
let sign_up = document.querySelector('#sign_up');
let signUp_button = document.querySelector('#signUp_button');
let sign_up_field_open = document.querySelector('#sign_up_field_open');
let LogIn_username = document.querySelector('#username');
let LogIn_password = document.querySelector('#password');
let sign_up_username = document.querySelector('#sign_up_username');
let sign_up_password = document.querySelector('#sign_up_password');
let sign_up_confirm_password = document.querySelector('#sign_up_confirm_password');
let sypport = document.querySelector('#contacts_list_bottun1');
let Sales_growth = document.querySelector('#contacts_list_bottun2');
let Coponents_driven = document.querySelector('#contacts_list_bottun3');
let Swap_the_icon = document.querySelector('#contacts_list_bottun4');
let contacts_list_support = document.querySelector('.contacts_list_support');
let contacts_list_SalesGrowth = document.querySelector('.contacts_list_SalesGrowth');
let contacts_list_CoponentsDriven = document.querySelector('.contacts_list_CoponentsDriven');
let contacts_list_SwapTheIcon = document.querySelector('.contacts_list_SwapTheIcon');
let list_circle = document.querySelector('.list_circle');
let list_heading = document.querySelector('.list_heading');
let list_paragraph = document.querySelector('.list_paragraph');
let hidden_text = document.querySelector('#hidden_text');
let contacts_list_close = document.querySelector('#contacts_list_close');
let contacts_list_close_wrapper = document.querySelector('.contacts_list_close_wrapper');



open_login.onclick = function(e){
    e.preventDefault();

    registration_form.style.display = "flex";
};

close_login.onclick = function(e){
    e.preventDefault();

    registration_form.style.display = "none";
    LogIn_username.value = "";
    LogIn_password.value = "";
};

login_button.onclick = function(e){
    e.preventDefault();

    registration_form.style.display = "none";
    LogIn_username.value = "";
    LogIn_password.value = "";
};

registration_field_open.onclick = function(e){
    e.preventDefault();

    sign_up.style.display = "flex";
    registration_form.style.display = "none";
    LogIn_username.value = "";
    LogIn_password.value = "";
}

// sign_up_form_close.onclick = function(e){
//     e.preventDefault();

//     sign_up.style.display = "none";
//     sign_up_username.value = "";
//     sign_up_password.value = "";
//     sign_up_confirm_password.value = "";
// }

// signUp_button.onclick = function(e){
//     e.preventDefault();

//     sign_up.style.display = "none";
//     sign_up_username.value = "";
//     sign_up_password.value = "";
//     sign_up_confirm_password.value = "";
// }

// sign_up_field_open.onclick = function(e){
//     e.preventDefault();

//     registration_form.style.display = "flex";
//     sign_up.style.display = "none";
//         sign_up_username.value = "";
//     sign_up_password.value = "";
//     sign_up_confirm_password.value = "";
// }

// sypport.onclick = function(e){
//     e.preventDefault();

//     contacts_list_CoponentsDriven.style.display = "none";
//     contacts_list_SalesGrowth.style.display = "none";
//     contacts_list_SwapTheIcon.style.display = "none";
//     contacts_list_support.style.width = `${100}%`;
//     contacts_list_support.style.heght = "auto";
//     contacts_list_support.style.boxShadow = " 0px 0px 2px 1px grey";
//     list_heading.style.textAlign = "center";
//     list_heading.style.fontSize = "30px"
//     list_circle.style.display = "none";
//     sypport.style.display = "none";
//     list_paragraph.style.display = "none";
//     hidden_text.style.display = "flex";
//     contacts_list_close_wrapper.style.display = "flex";
// }

fetch("http://127.0.0.1:5000/index", {method: "GET"})
.then(function (e){
    console.log(e);
});











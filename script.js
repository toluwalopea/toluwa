closeBtn = document. getElementsByClassName 
("closeBtn")[0];







close_btn .addEventlistner('click'), function (event) {
    let actionNow= event.target
    let v = actionNow.parentElement .parentElement
    v.style.display = 'none'
    regbtn.style.dipslay="block"
}
function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("less Info").addClass("active")
    }


    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
} 

function onFormSubmit (e) {
    e.preventDefault()

    const email = $("inp-email")
    const subject = $("inp-subject")
    const message = $("inp-message")

    if(!$(email).val()) {
        alert("Email is Required")
    } else if (!$(subject).val()) {
        alert ("Subject is Required")
    } else if (!$(message).val()) {
        alert ("Message is Required")
    } else {
        alert ("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")


    }
}
window.onload = function () {
    Swal.fire({
        title: 'Do you want to talk about it?',
        confirmButtonText: 'Yes',
        confirmButtonColor: '#003049',
        showCancelButton: true,
        cancelButtonText: 'No',
        cancelButtonColor: '#780000',
    })
    .then(function (result) {
        if (result.isConfirmed) {
        } else {
            window.location.href = "myMessage.html";
        }
    });   
}

document.getElementsByClassName("button")[0].onclick = function () {
    window.location.href = "myMessage.html";
}
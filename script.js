function getFormData() {
    let data = {
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
        zipCode: document.getElementById("zip-code").value,
        status: document.getElementById("status").checked,
    };
    return data;
}

function checkboxIsChecked() {
    let inputStatus = getFormData().status;
    return inputStatus;
}

function validateFormData(data) {
    if (data.name !== null && data.email !== null && data.city !== null && data.zipCode !== null && checkboxIsChecked()) {
        return true;
    } else {
        return false;
    }
}

function submit() {
    const input = getFormData();
    const warning = document.getElementById("submit-form");
    warning.onclick = showMessage();

    function showMessage() {
        if (!validateFormData(input)) {
            alert("Periksa form Anda sekali lagi.");
        } else {
            alert("Terima kasih telah mengisi form ini.");
        }
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    submit();
});

window.addEventListener("scroll", muncul);
window.addEventListener("load", muncul);

function muncul() {
    let elements = document.querySelectorAll(".elemen, .elemen2, .elemen3, .elemenmain1, .elemenmain2, #orang1, #orang2, #orang3, .formkiri, .formkanan, #foot1");

    for (let i = 0; i < elements.length; i++) {
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 70;

        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add("tampil");
        } else {
            elements[i].classList.remove("tampil");
        }
    }
}

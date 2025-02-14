const form = document.getElementById('coverletter-form');

const nameElements = document.querySelectorAll('[data-field="my-name"]');
const addressElements = document.querySelectorAll('[data-field="my-address"]');
const emailElements = document.querySelectorAll('[data-field="my-email"]');
const phoneElements = document.querySelectorAll('[data-field="my-phone"]');

const companyNameElements = document.querySelectorAll(
    '[data-field="company-name"]'
);
const companyAddressElements = document.querySelectorAll(
    '[data-field="company-address"]'
);
const jobTitleElements = document.querySelectorAll('[data-field="job-title"]');

// Form details
let myName = document.getElementById('name');
let address = document.getElementById('address');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let companyName = document.getElementById('company-name');
let companyAddress = document.getElementById('company-address');
let jobTitle = document.getElementById('job-title');

console.log(jobTitle.value);

// Filling Form Details from local storage
function fillFormFromLocalStorage() {
    const storageDetails = localStorage.getItem('userDetails');

    if (storageDetails) {
        const userDetails = JSON.parse(storageDetails);

        myName.value = userDetails.myName;
        address.value = userDetails.address;
        email.value = userDetails.email;
        phone.value = userDetails.phone;
        companyName.value = userDetails.companyName;
        companyAddress.value = userDetails?.companyAddress;
        jobTitle.value = userDetails?.jobTitle;
    }
}

fillFormFromLocalStorage();

function onSubmit(e) {
    e.preventDefault();

    const details = {
        myName: myName.value,
        address: address.value,
        email: email.value,
        phone: phone.value,
        companyName: companyName.value,
        companyAddress: companyAddress.value,
        jobTitle: jobTitle.value,
    };

    if (companyName.value.length === 0 || jobTitle.value.length === 0) {
        alert('please enter the company name and Job Title');
        return;
    } else {
        localStorage.setItem('userDetails', JSON.stringify(details));
        fillUserDetailsToCoverLetter();
    }
}

function fillUserDetailsToCoverLetter() {
    nameElements.forEach((element) => (element.textContent = myName.value));
    addressElements.forEach((element) => (element.textContent = address.value));
    emailElements.forEach((element) => (element.textContent = email.value));
    phoneElements.forEach((element) => (element.textContent = phone.value));

    companyNameElements.forEach(
        (element) => (element.textContent = companyName.value)
    );
    companyAddressElements.forEach(
        (element) => (element.textContent = companyAddress.value)
    );
    jobTitleElements.forEach(
        (element) => (element.textContent = jobTitle.value)
    );
}

form.addEventListener('submit', onSubmit);

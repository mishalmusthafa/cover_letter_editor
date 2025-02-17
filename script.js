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

// Form Fields
const formFields = {
    name: document.getElementById('name'),
    address: document.getElementById('address'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    companyName: document.getElementById('company-name'),
    companyAddress: document.getElementById('company-address'),
    jobTitle: document.getElementById('job-title'),
};

// Load saved form from local storage
function loadFormData() {
    try {
        const savedData = localStorage.getItem('userDetails');
        if (savedData) {
            const userDetails = JSON.parse(savedData);

            Object.keys(formFields).forEach((key) => {
                if (userDetails[key]) {
                    formFields[key].value = userDetails[key];
                }
            });
        }
    } catch (error) {
        console.log('Error Getting data from local storage', error);
    }
}

// Save Form Data To Local Storage
function saveData() {
    const userDetails = {};

    Object.keys(formFields).forEach((key) => {
        if (formFields[key].value) {
            userDetails[key] = formFields[key].value;
        }
    });

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
}

function onSubmit(e) {
    e.preventDefault();

    if (
        formFields.companyName.value.length === 0 ||
        formFields.jobTitle.value.length === 0
    ) {
        alert('please enter the company name and Job Title');
        return;
    } else {
        saveData();
        updateCoverLetter();
    }
}

// Update Cover letter elements
function updateCoverLetter() {
    const updateElements = (elements, value) => {
        elements.forEach((element) => (element.textContent = value));
    };

    const {
        name,
        email,
        address,
        phone,
        companyAddress,
        companyName,
        jobTitle,
    } = formFields;

    updateElements(nameElements, name.value);
    updateElements(addressElements, address.value);
    updateElements(phoneElements, phone.value);
    updateElements(emailElements, email.value);
    updateElements(companyNameElements, companyName.value);
    updateElements(companyAddressElements, companyAddress.value);
    updateElements(jobTitleElements, jobTitle.value);
}

// Initialize app
function init() {
    if (!form) return;

    loadFormData();
    form.addEventListener('submit', onSubmit);
}

init();

import { getAllCompanies } from "../../scripts/api.js";

function createCompanyLi(company) {
    const li = document.createElement('li');
    li.classList.add('company');

    const nameCompany = document.createElement("span");
    nameCompany.innerText = company.name;

    const divInfoCompany = document.createElement("div");

    const time = document.createElement("span");
    time.classList.add("time");
    time.innerText = company.opening_hours;

    const btnSector = document.createElement("span");
    btnSector.innerText = company.sectors.description;

    divInfoCompany.append(time, btnSector);
    li.append(nameCompany, divInfoCompany);
    return li;
}

async function renderCompanies() {
    const {responseJson} = await getAllCompanies();
    console.log(responseJson);
    const ul = document.querySelector('.companies');

    responseJson.forEach(company => {
        ul.append(createCompanyLi(company));
    });
}

function goToLoginPage() {
    const btnLogin = document.querySelector(".btn-primary");
    btnLogin.addEventListener('click', ()=> {
        window.location.href = '../login/index.html';
    })
}

function goToRegisterPage() {
    const btnRegister = document.querySelector(".btn-secondary");
    btnRegister.addEventListener('click', ()=> {
        window.location.href = '../register/index.html';
    })
}

goToLoginPage();
goToRegisterPage() 
renderCompanies();


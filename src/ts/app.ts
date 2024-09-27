const form = document.querySelector("form") as HTMLFormElement;
const productName = document.querySelector("#name") as HTMLInputElement;
const price = document.querySelector("#price") as HTMLInputElement;
const category = document.querySelector("#category") as HTMLInputElement;
const unit = document.querySelector("#unit") as HTMLInputElement;
const unitOption = document.querySelector("#unit-option") as HTMLSelectElement;
const date = document.querySelector("#date") as HTMLInputElement;
const broughtBy = document.querySelector("#brought-by") as HTMLInputElement;
const tbody = document.querySelector("#tbody") as HTMLTableElement;

let Products: any[] = [];
let localProducts = localStorage.getItem("Products");

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    let product = {
        name: productName.value,
        price: price.value,
        category: category.value,
        unit: unit.value,
        unitOption: unitOption.value,
        date: date.value,
        broughtBy: broughtBy.value
    }
    Products.push(product);
    localStorage.setItem("Products" , JSON.stringify(Products));
    productName.value = "";
    price.value = "";
    category.value = "";
    unit.value = "";
    unitOption.value = "select unit of measure";
    date.value = "";
    broughtBy.value = "";
    console.log(Products);

    
    tbody.innerHTML = "";
        for(let i = 0; i < Products.length; i++){
            tbody.innerHTML += `
            <tr>
                <td>${Products[i].name}</td>
                <td>${Products[i].price}</td>
                <td>${Products[i].category}</td>
                <td>${Products[i].unit} ${Products[i].unitOption}</td>
                <td>${Products[i].date}</td>
                <td>${Products[i].broughtBy}</td>
            </tr>
            `
        }
    

})

console.log(localProducts)

window.onload = () => {
    if(localProducts){
        Products = JSON.parse(localProducts);
        tbody.innerHTML = "";
        for(let i = 0; i < Products.length; i++){
            tbody.innerHTML += `
            <tr>
                <td>${Products[i].name}</td>
                <td>${Products[i].price}</td>
                <td>${Products[i].category}</td>
                <td>${Products[i].unit} ${Products[i].unitOption}</td>
                <td>${Products[i].date}</td>
                <td>${Products[i].broughtBy}</td>
            </tr>
            `
        }
    }
}

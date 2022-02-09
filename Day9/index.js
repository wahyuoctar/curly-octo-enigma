class Person{
    constructor(fullName, occupation){
        this.fullName = fullName
        this.occupation = occupation
    }
}

let data = [
    new Person("Mark", "Software Developer"),
    new Person("Steve", "CEO"),
    new Person("Bill", "UI/UX"),
    new Person("Seto", "Data Scientist"),
]

const renderData = () => {
    let htmlResult = ""

    // forEach memiliki function dengan parameter default yang mana parameter 1 adalah isinya
    // atau value sedangkan parameter 2 adalah indexnya
    // dan forEach berfungsi juga sebagai looping for
    data.forEach((val, idx) => {
        htmlResult += `
    <tr>
        <td>${idx + 1}</td>
        <td>${val.fullName}</td>
        <td>${val.occupation}</td>
        <td><Button onclick="deleteData(${idx})">Delete</Button></td>
    </tr>
    `
    })

    document.getElementById("tableData").innerHTML = htmlResult
}

renderData()

const addData = () => {
    const fullNameInput = document.getElementById("nameInput").value
    const occupationInput = document.getElementById("occupationInput").value

    // Input Validation
    if(!fullNameInput || !occupationInput){
        alert("Kedua field harus diisi!")
        return
    }

    const newPerson = new Person(fullNameInput, occupationInput)

    data.push(newPerson)

    console.log(data);

    // Menampilkan data terbaru
    renderData()

    // Mengosongkan kembali text yang ada di input
    document.getElementById("nameInput").value = ""
    document.getElementById("occupationInput").value = ""
}

function deleteData(deleteIndex){
    data.splice(deleteIndex, 1)
    renderData()
}
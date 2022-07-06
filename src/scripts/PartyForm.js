import { sendForm } from "./dataAccess.js"


export const PartyForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="numberAttending">How many children are attending the party?</label>
        <input type="number" name="numberAttending" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyDate">Date of party</label>
        <input type="date" name="partyDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyLength">Length of party</label>
        <input type="tel" name="partyLength" class="input" />
    </div>

    <button class="button" style="vertical-align:middle"><span id="submitPartyForm">Submit Form</span></button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitPartyForm") {
        // get what the user typed into the forms
        const userName = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userAttendence = document.querySelector("input[name='numberAttending']").value
        const userAdress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userLength = document.querySelector("input[name='partyLength']").value

        // Make an object out of the user input
        const dataToSend = {
            parentName: userName,
            childName: userChild,
            attending: userAttendence,
            address: userAdress,
            date: userDate,
            length: userLength,
            completion: false
        }

        // Send the data to the API for permanent storage
        sendForm(dataToSend)

    }
})
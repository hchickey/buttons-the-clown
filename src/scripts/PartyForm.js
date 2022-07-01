


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
        <input type="time" name="partyLength" class="input" />
    </div>

    <button class="button" id="submitPartyForm">Submit Form</button>
    `

    return html
}
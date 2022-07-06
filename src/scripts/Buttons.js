import { PartyForm } from "./PartyForm.js";
import { Requests } from "./Requests.js";
import { Completions } from "./Completions.js";

export const Buttons = () => {
    return `
    <h1>Buttons and Lollipop's Clown Party Service</h1>
    <section class="partyForm">
        ${PartyForm()}
    </section>

    <section class="partyRequests">
    <h2>Party Reservations</h2>
        ${Requests()}
    </section>
    
    <section class="completions">
    <h2>Completed Parties</h2>
        ${Completions()}
    </section>`
    
}
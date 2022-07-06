import { Buttons } from "./Buttons.js";
import { fetchRequests, fetchClowns, fetchCompletions } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(() => {
        mainContainer.innerHTML = Buttons()
    })

    
}

render()

mainContainer.addEventListener(
    "stateChanged", 
    customEvent => {
        render()
    }
)
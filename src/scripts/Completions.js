import { getCompletions } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const Completions = () => {
    const completions = getCompletions()

    const string = (complete) => {
        let listHTML = `
        <li class="confetti">
            Party for ${complete.childName} was done successfully!!
            
        </li>`
    return listHTML
    }

    let html = `
    <ul class="completedList">
        ${completions.map(string).join("")}
    </ul>
    `

    return html
}
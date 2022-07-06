import { getRequests, getClowns, deleteRequest, saveCompletion, updateRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change", (event) => {
        if (event.target.id === "clown") {
            const [requestId, clownId] = event.target.value.split("--")
            const requests = getRequests()


        const completion = {
            requestId: parseInt(requestId),
            clownId: parseInt(clownId),
            date: (requests.map(request => {if(request.id === parseInt(requestId)){return request.date}})).pop() ,
            childName: (requests.map(request => {if(request.id === parseInt(requestId)){return request.childName}})).pop()
        }

        saveCompletion(completion)

        requests.map(request => {if(request.id === parseInt(requestId)){
            request.completion = true
            const completedRequest = request
            updateRequest(completedRequest)
        }
        })
        }
    }
)

const convertRequestToListElement = (request) => {
    const clowns = getClowns()

    if (request.completion === false) {
    return `
    <li>
        ${request.parentName}'s reservation is set for ${request.date}
        <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns.map(clown => {
        return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
    }
    ).join("")}
    </select>
        <button class="request__delete"
            id="request--${request.id}">
            Deny
        </button>
    </li>
    `
}
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
    <ul>
    ${requests.map(convertRequestToListElement).join("")}
    </ul>
    `

    return html
}
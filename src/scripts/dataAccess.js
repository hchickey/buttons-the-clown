const applicationState = {
    requests: [],
    clowns: [],
    completions: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const sendForm = (userFormRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userFormRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (partyRequests) => {
            applicationState.requests = partyRequests
        }
    )
}

export const getRequests = () => {
    return applicationState.requests.map(request =>({...request}))
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (clowns) => {
            applicationState.clowns = clowns
        }
    )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown =>({...clown}))
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const getCompletions = () => {
    return applicationState.completions.map(complete =>({...complete}))
}

export const updateRequest = (userPartyRequest) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyRequest)
    }

    return fetch(`${API}/requests/${userPartyRequest.id}`, fetchOptions)
    .then(response => response.json())
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.completions = data
        }
    )
}

export const saveCompletion = (chosenClown) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chosenClown)
    }

    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const deleteCompletion = (id) => {
    return fetch(`${API}/completions/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}
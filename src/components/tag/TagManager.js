export const getTags = () => {
    return fetch(`http://localhost:8088/tags`)
        .then(response => response.json())
}

export const getEntryTags = (entry_id) => {
    return fetch(`http://localhost:8088/entrytags?entry_id=${entry_id}`)
        .then(response => response.json())
}
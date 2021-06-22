export const goToHome = (history) => {
    history.push("/")
}

export const goToPoke = (history) => {
    history.push("/poke")
}

export const goToDetails = (history, name) => {
    history.push(`/details/${name}`)
}

export const goBack = (history) => {
    history.goBack()
} 
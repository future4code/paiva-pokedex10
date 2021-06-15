export const goToHome = (history) => {
    history.push("/")
}

export const goToPoke = (history) => {
    history.push("/poke")
}

export const goToDetails = (history) => {
    history.push("/details")
}

export const goBack = (history) => {
    history.goBack()
} 
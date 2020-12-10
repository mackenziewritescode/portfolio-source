const pageChange = (page) => {
    window.history.replaceState(`Page ${page}`, null, `#page-${page}`)
    console.log(`page ${page}`)
}

export default pageChange
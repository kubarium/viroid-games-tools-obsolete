export const pathDeconstructor = (path) => {



    let title = path.split("/")[1]
    //sanitize -
    title = title.replace(RegExp(/-/, "g"), " ");
    //convert to Title Case
    return title.toTitleCase();
}


String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
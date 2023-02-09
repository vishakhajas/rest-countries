export const searching=(arr, searchBy, keyword)=>{
    return arr.filter((item)=>item[searchBy].toLowerCase().includes(keyword.toLowerCase()))
}

export const filtering = (arr, keyword) => {
    return arr.filter((item) => keyword === "All" ? item :  item["region"].toLowerCase() === keyword.toLowerCase())
}
export const paginate = (arr, currentPage, pageSize) => {
    let startIndex = currentPage * pageSize;
    let endIndex = startIndex + pageSize;
    return arr.slice(startIndex , endIndex);
}
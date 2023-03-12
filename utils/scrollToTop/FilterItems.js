
export const FilterItems = (arr, query) => {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

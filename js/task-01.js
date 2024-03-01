const categoriesList = document.querySelector('#categories');
const getLiItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categoriesItems.length);
getLiItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elements = item.querySelector('ul > li');
    const howManyElements = elements.length;
    console.log('Category:', categoryName);
    console.log('Elements:', howManyElements);
});
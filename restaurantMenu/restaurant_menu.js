const breakfastMenu = ['Pancakes-$12','Eggs-$13.3','Benedict-$14.55','Oatmeal-$16.66','Frittata-$23.09'];
const mainCourseMenu = ['Steak-$13','Pasta-$12.44','Burger-$45.44','Salmon-$23.45'];
const dessertMenu = ['Cake-$14.55','Ice Cream-$14.55','Pudding-$14.55','Fruit Salad-$14.55']

const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p> Item ${index+1}: ${item}
</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach( (item,index) => {
    mainCourseItem += `<p> Article ${index+1} : ${item} </p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for( let i = 0; i < dessertMenu.length;i++){
    dessertItem += `<p> Article ${i+1} : ${dessertMenu[i]} </p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
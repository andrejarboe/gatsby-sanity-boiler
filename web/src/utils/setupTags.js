const setupTags = recipes =>{
    const allTags = {}

    // const array = recipes.map(recipe => {
        
    //     Object.values(recipe.tags.title);
    // })

    // console.log('array: ' + array);

    console.log('***************UTILs****************');

    recipes.forEach(recipe => {
        recipe.tags.forEach(tag => {

            // console.log(tag.title);

            if(allTags[tag.title]){
                console.log('hello');
                allTags[tag.title] = allTags[tag.title] + 1;
            } else {
                allTags[tag.title] = 1
            }
            
        })
    });

    
    console.log('all tags: ');
    console.log(allTags);

    return (
        recipes
    )
}

export default setupTags
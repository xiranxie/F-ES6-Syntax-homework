const inject = (items, sections) =>{
    var reverse_sections = sections.reverse();
    for(let section of sections){
        items.splice(section.index,0,section.content);
    }
    return items;
}
export { inject };

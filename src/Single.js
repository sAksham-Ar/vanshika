import array from './poem';
function content(props)
{
    const {contents}=array;
    const {id}=props.match.params;
    const content=contents[id];
    console.log(id);
    return(
        <div className="single" dangerouslySetInnerHTML={{__html:content}}/>);
}
export default content;
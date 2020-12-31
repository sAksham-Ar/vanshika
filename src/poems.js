import arrays from './poem';
import { Link } from 'react-router-dom';
function Poems(){
    const {titles}=arrays;
    return(
        <ul className="poems-list">
            {
                titles.map(
                    (title,idx)=>{
                        return(<li id={idx} className="poem">
                                <h1>{title}</h1>
                                <Link to={`/poems/${idx}`}>Read More</Link>
                            </li>);
                    }
                )
            }
        </ul>
    );
}
export default Poems;
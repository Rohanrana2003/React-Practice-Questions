/* eslint-disable react/prop-types */
import { useState } from "react";



const Entry = ({ entry, depth }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div style={{ marginLeft: depth * 10 + 'px' }} className="cursor-pointer" >

            <button onClick={()=>setIsExpanded(!isExpanded)}>
                {entry.children? isExpanded?'- ':'+ ':''}
                {entry.name}
            </button>

            {isExpanded && entry.children?.map((e, i) => (
                <Entry key={i} entry={e} depth={depth + 1} />
            ))}

        </div>
    )
}

export default Entry

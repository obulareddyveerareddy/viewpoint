import React from 'react';
import {Link} from 'react-router-dom';

const BreadcrumbSection = ({dataSource}) => {
    return (
        <nav aria-label="breadcrumb bg-white">
            <ol className="breadcrumb">
                {dataSource.map(function(item, index){
                    if((index+1) === dataSource.length){
                        return <li key={ index } className="breadcrumb-item active" aria-current="page">{item.name}</li>;
                    }else{
                        return <li key={ index } className="breadcrumb-item"><Link to={item.link}>{item.name}</Link></li>;
                    }
                    
                })}
                
            </ol>
        </nav>
    );
}

export default BreadcrumbSection;
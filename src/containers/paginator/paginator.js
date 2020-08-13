import React from "react";
import styles from './paginator.module.scss';

const Paginator = (props) => {

        let {page, totalItems, handleSetFilterPage} = props;
        let paginator = [];
        let totalPage = Math.floor(totalItems / props.offset);
    
        const buildPaginator = (pages) => {
            let newPages = pages.map((itemPage, index) => {
                let classPage = itemPage === page ? `${styles.paginatorItemActive}` : `${styles.paginatorItem}`
                let newItemPage = itemPage === '...' ? 
                    <div className={classPage} key={index} >{itemPage}</div>
                :
                    <div className={classPage} key={index} onClick={() => handleSetFilterPage(itemPage)} >{itemPage}</div>
                return newItemPage;
            });
    
            return <div className={styles.container}>{newPages}</div>;
        }
    
        const setPaginator = () => {
    
            if(totalItems > 0){
    
                if( page > 6 && totalPage > (page + 3) ){
        
                    paginator.push( 1 );
                    paginator.push( '...' );
                    for (let i = 0; i < 3; i++) {
                        paginator.push( (page - 3) + i ); 
                    }
                    paginator.push(page);
                    for (let i = 1; i < 3; i++) {
                        paginator.push( page + i ); 
                    }
                    if( totalPage - (page + 3) > 1){
                        paginator.push( '...' );
                    }
                    paginator.push( totalPage );
                    
                }else if( totalPage > (page + 3) ){
            
                    for (let i = 1; i <= page; i++) {
                        paginator.push( i ); 
                    }
                    for (let i = 1; i < 3; i++) {
                        paginator.push( page + i ); 
                    }
                    paginator.push( '...' );
                    paginator.push( totalPage );
            
                }else if( page > 6 ){
                    paginator.push( 1 );
                    paginator.push( '...' );
                    for (let i = 0; i < 3; i++) {
                        paginator.push( (page - 3) + i ); 
                    }
                    for (let i = page; i <= totalPage; i++) {
                        paginator.push( i ); 
                    }
                }else{
                    for (let i = 1; i >= totalPage; i++) {
                        paginator.push( i ); 
                    }
                }
                return buildPaginator(paginator);
            }else{
                return null;
            }
    
        }
        
        return (
            <>
                {setPaginator()}
            </>
        );
    };

export default Paginator;
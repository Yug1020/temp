const ShimmerUI = ()=>{
    const Shimmecard = []
    
    for ( let i=0; i<12; i++){
        Shimmecard.push(<div key={i} className="shimmercard"></div>)
    }
    return (
        <div > 
            <button className="shimmer-searchbar"></button> 
            <button className="shimmer-btn"></button>
            <div className="shimmer-card-container">
                {Shimmecard}
            </div>
        </div>
    )
}

export default ShimmerUI;
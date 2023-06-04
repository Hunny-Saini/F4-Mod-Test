import Card from "./Card";

const Homepage = ({data})=>{
    return(
        <div className="container">
            {
                data.map((value,index)=>(
                    <Card post={value} />
                ))
            }
        </div>
    )
}

export default Homepage;
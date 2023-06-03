import Sdata from "./Netflixsdata";
import Cards from "./Component";
const Netflix = () => {
    return (
        <>
            <Cards
                key={Sdata[1].id}
                imgsrc={Sdata[1].imgsrc}
                link={Sdata[1].links}
                sname={Sdata[1].sname}
                title={Sdata[1].title}
            />
            <Cards
                key={Sdata[2].id}
                imgsrc={Sdata[2].imgsrc}
                link={Sdata[2].links}
                sname={Sdata[2].sname}
                title={Sdata[2].title}
            />
            <Cards
                key={Sdata[3].id}
                imgsrc={Sdata[3].imgsrc}
                link={Sdata[3].links}
                sname={Sdata[3].sname}
                title={Sdata[3].title}
            />
            <Cards
                key={Sdata[4].id}
                imgsrc={Sdata[4].imgsrc}
                link={Sdata[4].links}
                sname={Sdata[4].sname}
                title={Sdata[4].title}
            />
        </>
    )
}

export default Netflix;
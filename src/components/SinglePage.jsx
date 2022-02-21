const Singlepage = ({data})=>{
    return <div>
          <div>
                <a href={`/${data.id}`}>{data.title}</a>
                <p>{data.author}</p>
                <p>{data.creation_date}</p>
                <p>{data.explicit}</p>
                <p>{data.quality}</p>
                <p>{data.author}</p>
          </div>

    </div>
}
export default Singlepage
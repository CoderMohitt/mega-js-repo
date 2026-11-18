export default function MovieCard({title, year, poster}) {
    return <>
        <img src={poster} alt="" />
        <p>{title}</p>
        <p>{year}</p>
    </>
}
export default function MovieCard({ title, year, poster }) {
  return (
    <>
      <div className="flex flex-col">
        <img src={poster} alt="" width={200} />
        <p>{title}</p>
        <p>{year}</p>
      </div>
    </>
  );
}

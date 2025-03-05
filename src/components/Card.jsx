export default function Card(props) {
  // destructuring props
  const { movie } = props.content;
  // destructuring movie
  const { id, poster_path, title, overview, vote_average } = movie;

  return <h1>hello</h1>;
}

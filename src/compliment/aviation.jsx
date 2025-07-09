function Aviations({info}) {
  return (
    <div>
      <li>
        <h4>AVIATION</h4>
        {info.map((av,index) => (
            <ul key={index}>
              <li>{av.branch}</li>
              <li>{av.position}</li>
            </ul>
        ))}
      </li>
    </div>
  );
}

export default Aviations;
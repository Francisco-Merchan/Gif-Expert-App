const GifGridItem = ({ img }) => {
  return (
    <div className="card animate__animated animate__zoomInDown">
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
    </div>
  );
};

export default GifGridItem;

function House({ className, width, height }) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Text",
    fontWeight: 700,
    fontSize: "4rem",
    textTransform: "uppercase",
    lineHeight: 1.2,
    padding: "0 6px",
    width: "100%",
  };

  if (width != null) style.width = width;
  if (height != null) style.height = height;

  return (
    <div
      className={className}
      style={style}
    >
      Địa điểm tổ chức
    </div>
  );
}

export default House;

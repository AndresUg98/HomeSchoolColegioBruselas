import "./Card.css"


// eslint-disable-next-line react/prop-types
function Card({css,classImage = null,title = null}) {
  return (
    <div className={css}>
        <img src={classImage} alt="" />
        <p>{title}</p>
  </div>
  )
}

export {Card}
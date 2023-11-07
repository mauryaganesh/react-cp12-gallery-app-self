import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailItem, updateThumbId, isActive} = props
  const {
    imageUrl,
    thumbnailUrl,
    thumbnailAltText,
    imageAltText,
  } = eachThumbnailItem

  const onClickImage = () => {
    updateThumbId(imageUrl, imageAltText)
  }

  const thumbnailClass = !isActive ? 'active-thumbnail' : ''

  return (
    <li className={`list-items ${thumbnailClass}`}>
      <button className="button" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem

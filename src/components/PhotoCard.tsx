export interface PhotoCardType {
  photo: string,
  user: string,
  mainPhoto: string,
  description: string,
  likeCount: number
  }

interface PhotoCardProps{
  card: PhotoCardType
}

export default function PhotoCard({ card }: PhotoCardProps) {
  return (
    <div className="photo-card">
      <div className="card-header">
        <img src={card.photo} alt={card.user} />
        <h3 className="card-user">{card.user}</h3>
      </div>
      <img src={card.mainPhoto} alt={card.description} />
      <p>{card.description}</p>
      <p>Likes: {card.likeCount} </p>
    </div>
  );
}

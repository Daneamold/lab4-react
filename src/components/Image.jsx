import "./Image.css";

export default function Image({ list, setSelectedImage, selectedImage }) {
    return (
        <div className="image-container">
            {list.map((item) => (
                <div
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className={`image-item ${selectedImage && item.id === selectedImage.id ? 'active' : ''}`}
                >
                    <img src={item.url} alt={item.title} />
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    );
}
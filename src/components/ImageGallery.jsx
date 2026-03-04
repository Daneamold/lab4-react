import { useState} from "react";
import Image from "./Image.jsx";
import imagesCat from '../data/images.json'
import './ImageGallery.css'



export default function ImageGallery(){
    const [selectedImage, setSelectedImage] = useState(imagesCat[0])
    const [list, setList] = useState(imagesCat)

    const handleNext = () => {
        const currentIndex = list.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % list.length;
        setSelectedImage(list[nextIndex])
    }

    const handlePrev = () => {
        const currentIndex = list.findIndex(img => img.id === selectedImage.id)
        const prevIndex = (currentIndex -1 + list.length) % list.length

        setSelectedImage(list[prevIndex])
    }

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * list.length);
        setSelectedImage(list[randomIndex]);
    }

    const handleShuffle = () => {
        const shuffledList = [...list].sort(() => Math.random() - 0.5);
        setList(shuffledList);
    };

    return(
        <>
            <div className="gallery-container">
                <div className="controls">
                    <button onClick={handlePrev}>Anterior</button>
                    <button onClick={handleNext}>Următor</button>
                    <button onClick={handleRandom}>Random</button>
                    <button onClick={handleShuffle}>Amestecă</button>
                </div>

                <div className="main-display">
                    <h2>{selectedImage.title}</h2>
                    <img src={selectedImage.url} alt={selectedImage.title} />
                </div>

                <Image
                    list={list}
                    setSelectedImage={setSelectedImage}
                    selectedImage={selectedImage}
                />
            </div>
        </>
    )
}
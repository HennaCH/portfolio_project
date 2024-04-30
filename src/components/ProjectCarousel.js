import Carousel from 'react-bootstrap/Carousel'
import React, {useState} from 'react'
function ProjectCarousel({ projectImages}) {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    let imagesToDisplay =  []

    return (
        <Carousel  activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
            {imagesToDisplay.map((image, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        src={image}
                        width="500px"
                        className="rounded "
                        alt={`Slide ${idx}`}
                        style={{
                            paddingBottom: "50px"
                        }}
                    />

                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProjectCarousel
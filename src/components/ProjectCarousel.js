import Carousel from 'react-bootstrap/Carousel'
import React, {useState} from 'react'
function ProjectCarousel({ projectImages}) {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    let imagesToDisplay =  projectImages

    return (
        <Carousel  activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" className="col-12" style={{
            marginTop: "20px",
            marginLeft: "1%",
            paddingBottom: "20px"
        }}>
            {imagesToDisplay.map((image, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        src={image}
                        width="100%"
                        alt={`Slide ${idx}`}
                        style={{
                            borderRadius: "20px"
                        }}
                    />

                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProjectCarousel
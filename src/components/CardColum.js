import React from "react";
// import "./styles.css";

import Masony from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroll-component";




const testImages = [
    '/images/k1.jpg',
    '/images/k3.jpg',
    '/images/k4.jpg',

    '/images/k2.jpg',
    '/images/k7.jpg',
    '/images/k6.jpg',
]

const fakeApi = (page = 1, limit = 10) => {
    return Promise.resolve(testImages.slice(page, page + limit))

}


// Masory Options
const masonryOptions = {
    fitWidth: true,
    columnWidth: 220,
    gutter: 30,
    itemSelector: ".photo-item"
};

const CardColumn = ({ images = testImages }) => {
    const [imagesData, setImagesData] = React.useState(images);

    const [imageModal, setImageModal] = React.useState({
        showModal: false,
        modalSrc: null,
        imageIndex: null,
        currentSectionLength: null
    });

    const [page, setPage] = React.useState(0);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        fakeApi(page + 1)
            .then((response) => response.json())
            .then((res) => {
                setImagesData([...imagesData, ...res]);
            })
            .catch((err) => { });
    };

    const fetchData = () => {
        setPage(page + 1);
        getData();
    };

    const refresh = () => {
        console.log("refresh.....");
    };

    const onSet = (type) => {
        if (type == "prev") {
            if (imageModal.imageIndex != 0) {
                let data = imagesData[imageModal.imageIndex - 1];

                setImageModal((modal) => ({
                    ...modal,
                    imageIndex: imageModal.imageIndex - 1,
                    modalSrc: data
                }));
            } else {
                alert("NO MORE LEFT IMAGE");
            }
        } else if (type == "next") {
            if (imageModal.imageIndex > imagesData.length) {
                alert("NO MORE LEFT IMAGE");
            } else {
                let data = imagesData[imageModal.imageIndex + 1];

                setImageModal((modal) => ({
                    ...modal,
                    imageIndex: imageModal.imageIndex + 1,
                    modalSrc: data
                }));
            }
        }
    };

    return (
        <>
            <InfiniteScroll
                dataLength={imagesData.length}
                next={fetchData}
                hasMore={false}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        
                    </p>
                }
                refreshFunction={refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
                }
            >
                <Masony
                    className={"photo-list"}
                    elementType={"ul"}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                    {imagesData &&
                        imagesData.map((url, index) => (
                            <li className={`photo-item`} key={index}>
                                <img
                                    src={url}
                                    alt=""
                                    onClick={() => {
                                        setImageModal({
                                            showModal: true,
                                            modalSrc: url,
                                            imageIndex: index,
                                            currentSectionLength: imagesData.length
                                        });
                                    }}
                                />
                            </li>
                        ))}
                </Masony>
            </InfiniteScroll>

            <div
                id="myModal"
                className="modal"
                style={{
                    display: imageModal.showModal ? "block" : "none"
                }}
            >
                <div>
                    <span
                        className="close"
                        onClick={() =>
                            setImageModal((modal) => ({ ...modal, showModal: false }))
                        }
                    >
                        &times;
                    </span>

                    <div
                        className="mySlides"
                        style={{ display: imageModal.showModal ? "block" : "none" }}
                    >
                        <img
                            className="modal-content"
                            id="img01"
                            src={imageModal.modalSrc}
                            alt=""
                        />
                    </div>

                    <a href="#" className="prev" onClick={() => onSet("prev")}>
                        &#10094;
                    </a>
                    <a href="#" className="next" onClick={() => onSet("next")}>
                        &#10095;
                    </a>

                    <div />
                </div>
            </div>
        </>
    );
}







export default CardColumn;

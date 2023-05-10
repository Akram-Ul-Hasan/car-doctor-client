

const Carousel = (p) => {
    const {img, id} = p;
    const Id = parseInt(id);
    return (

        <div id={`slide${Id}`} className="carousel-item relative w-full h-[600px]">
          <img
            src={img}
            className="w-full rounded-xl"
          />
          <div className="absolute flex items-center rounded-xl h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white font-bold space-y-7 pl-12 w-1/2">
                <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${Id===1?6:Id-1}`} className="btn btn-circle mr-5">
              ❮
            </a>
            <a href={`#slide${Id%6+1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
    );
};

export default Carousel;
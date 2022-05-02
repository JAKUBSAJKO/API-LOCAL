import img1 from "../../assets/fotos/img1.jpg";
import img2 from "../../assets/fotos/img2.jpg";
import img3 from "../../assets/fotos/img3.jpg";
import img4 from "../../assets/fotos/img4.jpg";
import img5 from "../../assets/fotos/img5.jpg";
import img6 from "../../assets/fotos/img6.jpg";
import img7 from "../../assets/fotos/img7.jpg";
import img8 from "../../assets/fotos/img8.jpg";
import img9 from "../../assets/fotos/img9.jpg";

import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Foto = () => {
  return (
    <div>
      <Slider>
        <Splide
          options={{
            type: "slide",
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "2rem",
            speed: 1000,
            rewind: true,
            perMove: 1,
            autoplay: true,
          }}
        >
          <SplideSlide>
            <Card>
              <img src={img1} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img2} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img3} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img4} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img5} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img6} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img7} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img8} alt="" />
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card>
              <img src={img9} alt="" />
            </Card>
          </SplideSlide>
        </Splide>
      </Slider>
    </div>
  );
};

const Slider = styled.div`
  margin: 4rem 8rem;
`;

const Card = styled.div`
  height: 220px;
  border-radius: 1rem;
  overflow: hidden;
  cursor: move;

  img {
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Foto;

import { BannerImg } from './styles'

import banner from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <>
      <BannerImg style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          {/* <div className="textos">
            <h1>StarInox</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              laboriosam vitae totam. Voluptatum quasi consectetur fuga! Quasi
              ipsum, perferendis, molestiae numquam recusandae
            </p>
          </div> */}
        </div>
      </BannerImg>
    </>
  )
}

export default Banner

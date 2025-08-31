import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const ProductInfoModal = () => {
  const [selectedUMF, setSelectedUMF] = useState('24+');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('one-time');

  const umfRatings = [
    { level: '10+', color: '#e87722', mgo: '263+' },
    { level: '15+', color: '#e10600', mgo: '514+' },
    { level: '20+', color: '#ce0f69', mgo: '829+' },
    { level: '24+', color: '#830065', mgo: '1122+' },
    { level: '26+', color: '#0085ca', mgo: '1282+' },
    { level: '28+', color: '#3bad4e', mgo: '1450+' },
    { level: '30+', color: '#203e96', mgo: '1620+' }
  ];

  const productImages = [
    '/images/img_label_label_paints.png',
    '/images/img_label_label_paints_130x130.png',
    '/images/img_label_label_paints_1.png',
    '/images/img_label_label_paints_2.png',
    '/images/img_label_label_paints_3.png',
    '/images/img_label_label_paints_4.png',
    '/images/img_label_label_paints_5.png'
  ];

  const certificationImages = [
    '/images/img_certifications.png',
    '/images/img_certifications_70x70.png',
    '/images/img_certifications_1.png',
    '/images/img_certifications_2.png',
    '/images/img_certifications_3.png',
    '/images/img_certifications_4.png'
  ];

  const handleQuantityChange = (change) => {
    setSelectedQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <div className="w-full bg-primary min-h-screen">
      <Header />
      <main className="w-full">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8 py-6 lg:py-8">
            
            {/* Left Column - Product Images */}
            <div className="w-full lg:w-[46%] flex flex-col justify-start items-start">
              {/* Main Product Image */}
              <div className="w-full mb-8 bg-primary rounded-lg">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[584px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg overflow-hidden">
                  <img 
                    src="/images/img_manuka_honey_nz.png" 
                    alt="Manuka Honey UMF 24+ MGO 1122+" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4">
                    <button aria-label="Previous image">
                      <img src="/images/img_button_previous.svg" alt="Previous" className="w-[14px] h-[32px] sm:w-[18px] sm:h-[40px]" />
                    </button>
                    <button aria-label="Next image">
                      <img src="/images/img_button_next_slide.svg" alt="Next" className="w-[14px] h-[32px] sm:w-[18px] sm:h-[40px]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="w-full flex flex-col gap-2 sm:gap-3">
                <div className="flex gap-2 sm:gap-3 justify-center">
                  <div className="bg-primary rounded-lg p-2">
                    <img src="/images/img_1_manuka_honey_web_24_5_png.png" alt="Product view 1" className="w-[120px] h-[84px] sm:w-[143px] sm:h-[100px] object-cover rounded" />
                  </div>
                  <div className="bg-primary rounded-lg p-2">
                    <img src="/images/img_1_manuka_honey_web_24_png.png" alt="Product view 2" className="w-[120px] h-[84px] sm:w-[143px] sm:h-[100px] object-cover rounded" />
                  </div>
                </div>

                {/* Video Section */}
                <div className="w-full bg-black rounded-lg overflow-hidden relative h-[200px] sm:h-[250px] lg:h-[330px]">
                  <img src="/images/img_image_330x584.png" alt="Product video" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src="/images/img_container.svg" alt="Profile" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full" />
                      <div className="flex-1">
                        <div className="flex justify-end">
                          <span className="text-[12px] sm:text-[14px] font-medium text-[#eeeeee] bg-black bg-opacity-50 px-2 py-1 rounded">Watch Later</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] sm:text-[14px] font-medium text-[#eeeeee] bg-black bg-opacity-50 px-2 py-1 rounded">Share</span>
                        <span className="text-[12px] sm:text-[14px] font-medium text-[#eeeeee] bg-black bg-opacity-50 px-1 py-1 rounded">1/1</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Product Images Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4">
                  <div className="bg-primary rounded-lg p-2">
                    <img src="/images/img_1_manuka_honey_web_24_1_png.png" alt="Product detail 1" className="w-full h-[84px] sm:h-[100px] object-cover rounded" />
                  </div>
                  <div className="bg-primary rounded-lg p-2">
                    <img src="/images/img_1_manuka_honey_web_24_3_png.png" alt="Product detail 2" className="w-full h-[84px] sm:h-[100px] object-cover rounded" />
                  </div>
                  <div className="bg-primary rounded-lg p-2">
                    <img src="/images/img_us_24_product_t.png" alt="Product detail 3" className="w-full h-[84px] sm:h-[100px] object-cover rounded" />
                  </div>
                  <div className="bg-primary rounded-lg p-2">
                    <img src="/images/img_newzealandmanuk.png" alt="Product detail 4" className="w-full h-[84px] sm:h-[100px] object-cover rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Information */}
            <div className="w-full lg:w-[46%] flex flex-col justify-start items-start mt-6 lg:mt-8">
              {/* Product Title and Rating */}
              <div className="relative w-full mb-6">
                <div className="flex flex-col justify-start items-start">
                  <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-segoe font-normal leading-[38px] sm:leading-[43px] lg:leading-[54px] text-primary mb-2">
                    Manuka Honey
                  </h1>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex flex-col items-center">
                      <div className="flex items-start gap-1">
                        <span className="text-[26px] sm:text-[30px] lg:text-[38px] font-segoe font-normal leading-[35px] sm:leading-[40px] lg:leading-[51px] text-primary">UMF</span>
                        <img src="/images/img_small.png" alt="Trademark" className="w-[8px] h-[18px] sm:w-[10px] sm:h-[22px] lg:w-[12px] lg:h-[26px] mt-1" />
                      </div>
                      <span className="text-[28px] sm:text-[32px] lg:text-[40px] font-segoe font-normal leading-[38px] sm:leading-[43px] lg:leading-[54px] text-primary">MGO</span>
                    </div>
                    <div className="flex flex-col items-start ml-4">
                      <span className="text-[40px] sm:text-[48px] lg:text-[56px] font-segoe font-normal leading-[54px] sm:leading-[64px] lg:leading-[75px] text-primary">24+</span>
                      <span className="text-[36px] sm:text-[42px] lg:text-[50px] font-segoe font-normal leading-[49px] sm:leading-[57px] lg:leading-[68px] text-primary -mt-2">1122+</span>
                    </div>
                  </div>
                </div>

                {/* Info Button */}
                <button className="flex items-center gap-2 bg-[#66666626] rounded-[22px] px-3 py-2 mt-4">
                  <img src="/images/img_svg_gray_700.svg" alt="Info" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                  <span className="text-[11px] sm:text-[13px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-secondary">What is UMF and MGO?</span>
                </button>

                {/* UMF/MGO Information Modal */}
                <div className="mt-6 bg-secondary rounded-[10px] p-4 sm:p-5 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[16px] sm:text-[18px] font-segoe font-normal leading-[22px] sm:leading-[24px] text-primary">The Optimiser</h3>
                    <img src="/images/img_vector_1.svg" alt="Close" className="w-[16px] h-[8px] sm:w-[20px] sm:h-[10px]" />
                  </div>

                  {/* UMF Information */}
                  <div className="bg-[#f1f1f1] rounded-[5px] p-3 sm:p-4 mb-4">
                    <p className="text-[14px] sm:text-[16px] font-inter font-normal leading-[20px] sm:leading-[24px] text-primary mb-3">
                      <span className="font-segoe font-bold">UMF</span> is the strength and purity rating of Manuka honey.
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                      {umfRatings?.map((rating, index) => (
                        <div key={index} className="flex flex-col items-start gap-1">
                          <span className="text-[12px] sm:text-[14px] font-segoe font-semibold leading-[16px] sm:leading-[19px]" style={{ color: rating?.color }}>
                            {rating?.level}
                          </span>
                          <div className="w-[40px] sm:w-[56px] h-[3px] sm:h-[4px]" style={{ backgroundColor: rating?.color }}></div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[12px] sm:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] text-[#313131bf]">
                      The higher the number, the greater the potency and rarity of Manuka honey.
                    </p>
                  </div>

                  {/* MGO Information */}
                  <div className="bg-[#f1f1f1] rounded-[5px] p-3 sm:p-4 mb-4">
                    <p className="text-[14px] sm:text-[16px] font-inter font-normal leading-[20px] sm:leading-[24px] text-primary mb-3">
                      <span className="font-segoe font-bold">MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                      {umfRatings?.map((rating, index) => (
                        <div key={index} className="flex flex-col items-start gap-1">
                          <span className="text-[12px] sm:text-[14px] font-segoe font-semibold leading-[16px] sm:leading-[19px]" style={{ color: rating?.color }}>
                            {rating?.mgo}
                          </span>
                          <div className="w-[40px] sm:w-[56px] h-[3px] sm:h-[4px]" style={{ backgroundColor: rating?.color }}></div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[12px] sm:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] text-[#313131bf]">
                      The higher the number, the higher the antibacterial properties in the honey.
                    </p>
                  </div>

                  <div className="text-center">
                    <button className="text-[11px] sm:text-[13px] font-segoe font-semibold leading-[16px] sm:leading-[19px] text-secondary underline">
                      Close
                    </button>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-2 mt-6 -ml-12">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5]?.map((star) => (
                      <img key={star} src="/images/img_svg_yellow_700.svg" alt="Star" className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[12px] font-segoe font-normal leading-[14px] sm:leading-[16px] tracking-[2px] uppercase text-primary">
                    825 Reviews
                  </span>
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <p className="text-[16px] sm:text-[18px] font-segoe font-normal leading-[24px] sm:leading-[27px] text-primary mb-6">
                  For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                  Honey is powerfully active, sourced from wild and rugged locations around
                  Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                  flavour and your body will love you for it.
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-[38px] mb-6">
                  {certificationImages?.map((cert, index) => (
                    <img key={index} src={cert} alt={`Certification ${index + 1}`} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] object-contain" />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="w-full mb-6">
                <p className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] tracking-[1px] uppercase text-primary mb-2">
                  Size (Select One)
                </p>
                <p className="text-[16px] sm:text-[18px] font-segoe font-normal leading-[22px] sm:leading-[24px] text-primary mb-4">
                  Variant: 125g | 4.4oz
                </p>

                {/* Product Size Images */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {productImages?.slice(0, 4)?.map((image, index) => (
                    <img key={index} src={image} alt={`Size option ${index + 1}`} className="w-full h-[80px] sm:h-[100px] lg:h-[130px] object-cover rounded-[24px]" />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {productImages?.slice(4, 7)?.map((image, index) => (
                    <img key={index} src={image} alt={`Size option ${index + 5}`} className="w-full h-[80px] sm:h-[100px] lg:h-[130px] object-cover rounded-[24px]" />
                  ))}
                </div>
              </div>

              {/* Payment Options */}
              <div className="w-full mb-6">
                <p className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] tracking-[1px] uppercase text-primary mb-3">
                  Payment Options (Select One)
                </p>
                <div className="bg-[#f2f2f2] rounded-[24px] p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                    <button 
                      className={`flex-1 flex justify-between items-center px-4 sm:px-12 py-3 sm:py-4 rounded-[32px] border ${
                        selectedPayment === 'one-time' ?'bg-button-accent border-button-accent' :'bg-secondary border-button-accent'
                      }`}
                      onClick={() => setSelectedPayment('one-time')}
                    >
                      <span className={`text-[14px] sm:text-[16px] font-segoe font-normal leading-[15px] sm:leading-[17px] text-center ${
                        selectedPayment === 'one-time' ? 'text-button' : 'text-primary'
                      }`}>
                        One-time purchase
                      </span>
                      <span className={`text-[14px] sm:text-[16px] font-segoe font-normal leading-[15px] sm:leading-[17px] text-center ${
                        selectedPayment === 'one-time' ? 'text-button' : 'text-primary'
                      }`}>
                        $55.88 USD
                      </span>
                    </button>
                    <button 
                      className={`flex-1 flex justify-between items-center px-3 sm:px-4 py-3 sm:py-4 rounded-[32px] border ${
                        selectedPayment === 'subscribe' ?'bg-button-accent border-button-accent' :'bg-secondary border-button-accent'
                      }`}
                      onClick={() => setSelectedPayment('subscribe')}
                    >
                      <span className={`text-[13px] sm:text-[15px] font-segoe font-normal leading-[15px] sm:leading-[17px] text-center ${
                        selectedPayment === 'subscribe' ? 'text-button' : 'text-primary'
                      }`}>
                        Subscribe & save 20%
                      </span>
                      <span className={`text-[14px] sm:text-[16px] font-segoe font-normal leading-[15px] sm:leading-[17px] text-center ${
                        selectedPayment === 'subscribe' ? 'text-button' : 'text-primary'
                      }`}>
                        $44.70 USD
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/img_svg_blue_gray_900.svg" alt="Info" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                    <span className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-center text-primary">
                      What is a Subscription?
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-end mb-6">
                <div className="flex flex-col gap-2">
                  <p className="text-[11px] sm:text-[13px] font-segoe font-normal leading-[15px] sm:leading-[18px] text-primary">
                    SELECT QUANTITY
                  </p>
                  <div className="flex items-center gap-4 bg-button-accent border border-secondary rounded-[22px] px-4 py-2">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="text-[16px] sm:text-[18px] font-segoe font-normal leading-[22px] sm:leading-[24px] tracking-[2px] uppercase text-button"
                    >
                      -
                    </button>
                    <span className="text-[14px] sm:text-[16px] font-segoe font-normal leading-[19px] sm:leading-[22px] text-center text-button px-2 py-2 bg-button-accent rounded">
                      {selectedQuantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="text-[16px] sm:text-[18px] font-segoe font-normal leading-[22px] sm:leading-[24px] tracking-[2px] uppercase text-button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  size="large"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-[13px] sm:text-[15px] tracking-[1px] uppercase"
                  onClick={() => {}}
                >
                  Add to cart
                </Button>
              </div>

              {/* Beauty Bundle */}
              <div className="w-full bg-[#f2f2f2] rounded-[24px] p-4 sm:p-5 mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <img src="/images/img_button_previous.svg" alt="Previous" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
                  <h3 className="text-[18px] sm:text-[20px] font-segoe font-semibold leading-[24px] sm:leading-[27px] text-center text-primary">
                    Beauty Bundle
                  </h3>
                  <img src="/images/img_button_next_slide.svg" alt="Next" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <img src="/images/img_image_94x94.png" alt="UMF 20+" className="w-[70px] h-[70px] sm:w-[94px] sm:h-[94px] rounded-[10px]" />
                      <span className="text-[16px] sm:text-[18px] font-segoe font-semibold leading-[22px] sm:leading-[24px] text-center text-primary">UMF 20+</span>
                      <select className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-center text-primary border border-[#cdcdcd] rounded-[12px] px-2 py-1">
                        <option>250g</option>
                      </select>
                    </div>
                    <span className="text-[16px] sm:text-[18px] font-segoe font-semibold leading-[22px] sm:leading-[24px] text-center text-primary">+</span>
                    <div className="flex flex-col items-center gap-2">
                      <img src="/images/img_image_1.png" alt="UMF 24+" className="w-[70px] h-[70px] sm:w-[94px] sm:h-[94px] rounded-[10px]" />
                      <span className="text-[16px] sm:text-[18px] font-segoe font-semibold leading-[22px] sm:leading-[24px] text-center text-primary">UMF 24+</span>
                      <select className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-center text-primary border border-[#cdcdcd] rounded-[12px] px-2 py-1">
                        <option>250g</option>
                      </select>
                    </div>
                    <span className="text-[16px] sm:text-[18px] font-segoe font-semibold leading-[22px] sm:leading-[24px] text-center text-primary">+</span>
                    <div className="flex flex-col items-center gap-2">
                      <img src="/images/img_image_152.png" alt="Wooden Spoon" className="w-[70px] h-[70px] sm:w-[94px] sm:h-[94px] rounded-[10px]" />
                      <span className="text-[14px] sm:text-[18px] font-segoe font-semibold leading-[20px] sm:leading-[23px] text-center text-primary">Wooden Spoon</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-center line-through text-primary">$478.75 USD</span>
                      <span className="text-[16px] sm:text-[18px] font-segoe font-semibold leading-[22px] sm:leading-[24px] text-center text-primary">$430.88 USD</span>
                      <span className="text-[12px] sm:text-[14px] font-segoe font-semibold leading-[16px] sm:leading-[19px] text-[#087f1a]">Save 10%</span>
                    </div>
                    <Button 
                      variant="secondary" 
                      size="medium"
                      className="w-full px-6 sm:px-8 py-2 sm:py-3 text-[14px] sm:text-[16px] tracking-[1px] uppercase"
                      onClick={() => {}}
                    >
                      Add bundle to cart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Rewards Program */}
              <div className="w-full flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <img src="/images/img_colourclub_logo.png" alt="Colourclub" className="w-[32px] h-[30px] sm:w-[40px] sm:h-[38px] rounded-[18px]" />
                  <span className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-primary">Colourclub members earn up to</span>
                  <div className="bg-secondary rounded-[16px] px-2 py-1">
                    <span className="text-[16px] sm:text-[18px] font-segoe font-normal leading-[22px] sm:leading-[24px] text-[#f39c12]">56</span>
                  </div>
                  <span className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-primary">reward points when buy this item.</span>
                  <span className="text-[11px] sm:text-[13px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-primary">Sign up or log in</span>
                </div>

                {/* Delivery Information */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] tracking-[1px] uppercase text-primary">Delivery</p>
                    <p className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-primary">FREE DELIVERY ON ORDERS OVER $30</p>
                  </div>
                  <p className="text-[11px] sm:text-[13px] font-segoe font-normal leading-[15px] sm:leading-[18px] text-primary">
                    ESTIMATED DELIVERY DATE:<br />Jun 9 - Jun 13 to
                  </p>
                </div>

                {/* After Pay */}
                <div className="border-t border-primary pt-4">
                  <p className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] tracking-[1px] uppercase text-primary mb-2">After Pay</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-primary">or 4 interest-free payments of $13.97 with</span>
                    <img src="/images/img_button_afterpay.svg" alt="Afterpay" className="w-[70px] h-[17px] sm:w-[90px] sm:h-[22px]" />
                    <img src="/images/img_svg_gray_700.svg" alt="Info" className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]" />
                  </div>
                </div>

                {/* UMF Scale */}
                <div className="border-t border-primary pt-6">
                  <p className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] tracking-[1px] uppercase text-primary mb-4">UMF™ scale</p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {['UMF™ 10+', 'UMF™ 15+', 'UMF™ 20+', 'UMF™ 24+', 'UMF™ 26+', 'UMF™ 28+', 'UMF™ 30+']?.map((level, index) => (
                      <div key={index} className={`px-2 py-1 ${level === 'UMF™ 24+' ? 'border-b-2 border-[#830065]' : ''}`}>
                        <span className={`text-[11px] sm:text-[13px] font-segoe font-normal leading-[15px] sm:leading-[18px] tracking-[1px] text-center ${
                          level === 'UMF™ 24+' ? 'text-[#830065]' : 'text-primary'
                        }`}>
                          {level}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Taste Profile */}
                  <p className="text-[12px] sm:text-[14px] font-segoe font-normal leading-[16px] sm:leading-[19px] tracking-[1px] uppercase text-primary mb-4">Taste Profile</p>
                  <div className="relative mb-2">
                    <div className="h-[2px] bg-gradient-to-r from-[#e87722] via-[#830065] to-[#203e96] rounded-[1px]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img src="/images/img_image_blue_gray_900.svg" alt="Taste indicator" className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] sm:text-[13px] font-segoe font-normal leading-[16px] sm:leading-[19px] text-primary">Clean & Intense</span>
                    <span className="text-[11px] sm:text-[13px] font-segoe font-normal leading-[15px] sm:leading-[18px] text-primary">Bold & Intense</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductInfoModal;
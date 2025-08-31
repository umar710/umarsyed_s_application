import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('125g');
  const [selectedPayment, setSelectedPayment] = useState('one-time');
  const [quantity, setQuantity] = useState(1);
  const [selectedUMF20, setSelectedUMF20] = useState('250g');
  const [selectedUMF24, setSelectedUMF24] = useState('250g');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const sizeOptions = [
    { label: '125g | 4.4oz', value: '125g' },
    { label: '250g | 8.8oz', value: '250g' },
    { label: '500g | 17.6oz', value: '500g' },
    { label: '1kg | 35.2oz', value: '1kg' }
  ];

  const weightOptions = [
    { label: '250g', value: '250g' },
    { label: '500g', value: '500g' },
    { label: '1kg', value: '1kg' }
  ];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="w-full bg-primary">
      <Header />
      <main className="w-full">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8 py-6 lg:py-8">
            
            {/* Left Column - Product Images */}
            <div className="w-full lg:w-[46%] flex flex-col justify-start items-start">
              {/* Main Product Image */}
              <div className="w-full mb-8">
                <div className="relative w-full bg-primary rounded-lg overflow-hidden">
                  <div className="relative w-full aspect-square max-w-[584px] mx-auto">
                    <img 
                      src="/images/img_manuka_honey_nz.png" 
                      alt="Manuka Honey UMF 24+ MGO 1122+" 
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{ backgroundImage: "url('/images/img_.png')" }}
                    />
                    
                    {/* Navigation Arrows */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 pb-64">
                      <button aria-label="Previous image">
                        <img 
                          src="/images/img_button_previous.svg" 
                          alt="Previous" 
                          className="w-[18px] h-[40px]"
                        />
                      </button>
                      <button aria-label="Next image">
                        <img 
                          src="/images/img_button_next_slide.svg" 
                          alt="Next" 
                          className="w-[18px] h-[40px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="w-full flex flex-col gap-2 mb-8">
                <div className="flex gap-2 justify-center">
                  <div className="bg-primary rounded">
                    <img 
                      src="/images/img_1_manuka_honey_web_24_5_png.png" 
                      alt="Product view 1" 
                      className="w-full max-w-[286px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="bg-primary rounded">
                    <img 
                      src="/images/img_1_manuka_honey_web_24_png.png" 
                      alt="Product view 2" 
                      className="w-full max-w-[286px] h-[200px] object-cover"
                    />
                  </div>
                </div>

                {/* Video Section */}
                <div className="w-full bg-black rounded overflow-hidden">
                  <div className="relative w-full">
                    <div className="flex items-center justify-start p-4">
                      <img 
                        src="/images/img_container.svg" 
                        alt="User avatar" 
                        className="w-[50px] h-[50px] rounded-full mr-4"
                      />
                      <div className="flex-1 flex justify-between items-center">
                        <div className="flex-1 flex justify-end items-center">
                          <span className="text-[14px] font-medium text-[#eeeeee] bg-black bg-opacity-50 px-2 py-1 rounded">
                            Watch Later
                          </span>
                        </div>
                        <div className="flex justify-center items-center px-2">
                          <span className="text-[14px] font-medium text-[#eeeeee] bg-black bg-opacity-50 px-2 py-1 rounded">
                            Share
                          </span>
                        </div>
                        <div className="flex justify-end items-end px-3">
                          <span className="text-[14px] font-medium text-[#eeeeee] bg-black bg-opacity-50 px-1 py-1 rounded">
                            1/1
                          </span>
                        </div>
                      </div>
                    </div>
                    <img 
                      src="/images/img_image.png" 
                      alt="Video thumbnail" 
                      className="w-full h-[98px] object-cover"
                    />
                    <img 
                      src="/images/img_image_330x584.png" 
                      alt="Video content" 
                      className="w-full h-[330px] object-cover"
                    />
                  </div>
                </div>

                {/* Additional Product Images Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-primary rounded">
                    <img 
                      src="/images/img_1_manuka_honey_web_24_1_png.png" 
                      alt="Product detail 1" 
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="bg-primary rounded">
                    <img 
                      src="/images/img_1_manuka_honey_web_24_3_png.png" 
                      alt="Product detail 2" 
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="bg-primary rounded">
                    <img 
                      src="/images/img_us_24_product_t.png" 
                      alt="Product detail 3" 
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="bg-primary rounded">
                    <img 
                      src="/images/img_newzealandmanuk.png" 
                      alt="Product detail 4" 
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Information */}
            <div className="w-full lg:w-[46%] flex flex-col justify-start items-start mt-7 lg:mt-0 mb-4">
              {/* Product Title and Rating */}
              <div className="relative w-full mb-6">
                <div className="flex flex-col justify-start items-start w-full">
                  <div className="flex flex-col justify-start items-start w-full">
                    <h1 className="text-[32px] sm:text-[36px] lg:text-[40px] font-segoe font-normal leading-[43px] sm:leading-[48px] lg:leading-[54px] text-primary">
                      Manuka Honey
                    </h1>
                    <div className="flex items-start gap-2 -mt-3 lg:-mt-4">
                      <div className="flex flex-col items-center">
                        <div className="flex items-start">
                          <span className="text-[30px] sm:text-[34px] lg:text-[38px] font-segoe font-normal leading-[40px] sm:leading-[45px] lg:leading-[51px] text-primary">
                            UMF
                          </span>
                          <img 
                            src="/images/img_small.png" 
                            alt="Trademark" 
                            className="w-[12px] h-[26px] ml-1"
                          />
                        </div>
                        <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-segoe font-normal leading-[43px] sm:leading-[48px] lg:leading-[54px] text-primary">
                          MGO
                        </span>
                      </div>
                      <div className="flex flex-col items-start ml-4">
                        <span className="text-[45px] sm:text-[50px] lg:text-[56px] font-segoe font-normal leading-[60px] sm:leading-[67px] lg:leading-[75px] text-primary">
                          24+
                        </span>
                        <span className="text-[40px] sm:text-[45px] lg:text-[50px] font-segoe font-normal leading-[54px] sm:leading-[61px] lg:leading-[68px] text-primary -mt-7">
                          1122+
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* UMF/MGO Info Button */}
                  <button 
                    onClick={() => setIsInfoModalOpen(true)}
                    className="flex items-center gap-2 bg-[#66666626] rounded-[22px] px-[10px] py-[10px] mt-6 w-fit hover:bg-[#66666640] transition-colors cursor-pointer"
                  >
                    <img 
                      src="/images/img_svg_gray_700.svg" 
                      alt="Info" 
                      className="w-[16px] h-[16px]"
                    />
                    <span className="text-[13px] font-segoe font-normal leading-[19px] text-[#666666]">
                      What is UMF and MGO?
                    </span>
                  </button>

                  {/* UMF/MGO Information Modal */}
                  {isInfoModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-secondary rounded-[10px] p-4 sm:p-5 shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-[16px] sm:text-[18px] font-segoe font-normal leading-[22px] sm:leading-[24px] text-primary">UMF & MGO Information</h3>
                          <button 
                            onClick={() => setIsInfoModalOpen(false)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <svg className="w-[16px] h-[16px] text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>

                        {/* UMF Information */}
                        <div className="bg-[#f1f1f1] rounded-[5px] p-3 sm:p-4 mb-4">
                          <p className="text-[14px] sm:text-[16px] font-inter font-normal leading-[20px] sm:leading-[24px] text-primary mb-3">
                            <span className="font-segoe font-bold">UMF</span> is the strength and purity rating of Manuka honey.
                          </p>
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                            {[
                              { level: '10+', color: '#e87722', mgo: '263+' },
                              { level: '15+', color: '#e10600', mgo: '514+' },
                              { level: '20+', color: '#ce0f69', mgo: '829+' },
                              { level: '24+', color: '#830065', mgo: '1122+' },
                              { level: '26+', color: '#0085ca', mgo: '1282+' },
                              { level: '28+', color: '#3bad4e', mgo: '1450+' },
                              { level: '30+', color: '#203e96', mgo: '1620+' }
                            ]?.map((rating, index) => (
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
                            {[
                              { level: '10+', color: '#e87722', mgo: '263+' },
                              { level: '15+', color: '#e10600', mgo: '514+' },
                              { level: '20+', color: '#ce0f69', mgo: '829+' },
                              { level: '24+', color: '#830065', mgo: '1122+' },
                              { level: '26+', color: '#0085ca', mgo: '1282+' },
                              { level: '28+', color: '#3bad4e', mgo: '1450+' },
                              { level: '30+', color: '#203e96', mgo: '1620+' }
                            ]?.map((rating, index) => (
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
                          <button 
                            onClick={() => setIsInfoModalOpen(false)}
                            className="text-[11px] sm:text-[13px] font-segoe font-semibold leading-[16px] sm:leading-[19px] text-secondary underline hover:text-primary transition-colors"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                {/* Product Name and Reviews */}
                <div className="flex justify-between items-start w-full mb-6">
                  <span className="text-[18px] font-segoe font-normal leading-[24px] text-primary mt-2">
                    The Optimiser
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="relative w-[108px] h-[20px]">
                      {/* Background stars */}
                      <div className="absolute inset-0 flex gap-1">
                        {[...Array(5)]?.map((_, i) => (
                          <img 
                            key={i}
                            src="/images/img_vector.svg" 
                            alt="Star outline" 
                            className="w-[18px] h-[16px]"
                          />
                        ))}
                      </div>
                      {/* Filled stars */}
                      <div className="absolute inset-0 flex gap-1">
                        {[...Array(5)]?.map((_, i) => (
                          <img 
                            key={i}
                            src="/images/img_svg_yellow_700.svg" 
                            alt="Star filled" 
                            className="w-[18px] h-[18px]"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-[12px] font-segoe font-normal leading-[16px] tracking-[2px] uppercase text-primary ml-2">
                      825 Reviews
                    </span>
                  </div>
                </div>

                {/* Product Description */}
                <p className="text-[18px] font-segoe font-normal leading-[27px] text-primary mb-6">
                  For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                  Honey is powerfully active, sourced from wild and rugged locations around
                  Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                  flavour and your body will love you for it.
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-6 lg:gap-[38px] mb-8">
                  <img src="/images/img_certifications.png" alt="Certification 1" className="w-[70px] h-[70px]" />
                  <img src="/images/img_certifications_70x70.png" alt="Certification 2" className="w-[70px] h-[70px]" />
                  <img src="/images/img_certifications_1.png" alt="Certification 3" className="w-[70px] h-[70px]" />
                  <img src="/images/img_certifications_2.png" alt="Certification 4" className="w-[70px] h-[70px]" />
                  <img src="/images/img_certifications_3.png" alt="Certification 5" className="w-[70px] h-[70px]" />
                  <img src="/images/img_certifications_4.png" alt="Certification 6" className="w-[70px] h-[70px]" />
                </div>

                {/* Size Selection */}
                <div className="w-full mb-8">
                  <span className="text-[14px] font-segoe font-normal leading-[19px] tracking-[1px] uppercase text-primary block mb-2">
                    Size (Select One)
                  </span>
                  <span className="text-[18px] font-segoe font-normal leading-[24px] text-primary block mb-6">
                    Variant: 125g | 4.4oz
                  </span>
                  
                  {/* Size Options Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                    <img src="/images/img_label_label_paints.png" alt="125g option" className="w-full max-w-[130px] h-[130px] rounded-[24px] border-2 border-[#f1b434] cursor-pointer" />
                    <img src="/images/img_label_label_paints_130x130.png" alt="250g option" className="w-full max-w-[130px] h-[130px] rounded-[24px] cursor-pointer" />
                    <img src="/images/img_label_label_paints_1.png" alt="500g option" className="w-full max-w-[130px] h-[130px] rounded-[24px] cursor-pointer" />
                    <img src="/images/img_label_label_paints_2.png" alt="1kg option" className="w-full max-w-[130px] h-[130px] rounded-[24px] cursor-pointer" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <img src="/images/img_label_label_paints_3.png" alt="Additional option 1" className="w-full max-w-[130px] h-[130px] rounded-[24px] cursor-pointer" />
                    <img src="/images/img_label_label_paints_4.png" alt="Additional option 2" className="w-full max-w-[130px] h-[130px] rounded-[24px] cursor-pointer" />
                    <img src="/images/img_label_label_paints_5.png" alt="Additional option 3" className="w-full max-w-[130px] h-[130px] rounded-[24px] cursor-pointer" />
                  </div>
                </div>

                {/* Payment Options */}
                <div className="w-full mb-8">
                  <span className="text-[14px] font-segoe font-normal leading-[19px] tracking-[1px] text-primary block mb-3">
                    PAYMENT OPTIONS (SELECT ONE)
                  </span>
                  
                  <div className="bg-[#f2f2f2] rounded-[24px] p-6">
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div 
                        className={`flex-1 border border-[#f1b434] rounded-[32px] px-12 py-4 cursor-pointer ${
                          selectedPayment === 'one-time' ? 'bg-[#f1b434]' : 'bg-secondary'
                        }`}
                        onClick={() => setSelectedPayment('one-time')}
                      >
                        <div className="flex justify-between items-center">
                          <span className={`text-[16px] font-segoe font-normal leading-[17px] text-center ${
                            selectedPayment === 'one-time' ? 'text-button' : 'text-primary'
                          }`}>
                            One-time purchase
                          </span>
                          <span className={`text-[16px] font-segoe font-normal leading-[17px] text-center ${
                            selectedPayment === 'one-time' ? 'text-button' : 'text-primary'
                          }`}>
                            $55.88 USD
                          </span>
                        </div>
                      </div>
                      
                      <div 
                        className={`flex-1 border border-[#f1b434] rounded-[32px] px-4 py-4 cursor-pointer ${
                          selectedPayment === 'subscribe' ? 'bg-[#f1b434]' : 'bg-secondary'
                        }`}
                        onClick={() => setSelectedPayment('subscribe')}
                      >
                        <div className="flex justify-between items-center gap-7">
                          <span className={`text-[15px] font-segoe font-normal leading-[17px] text-center ${
                            selectedPayment === 'subscribe' ? 'text-button' : 'text-primary'
                          }`}>
                            Subscribe & save 20%
                          </span>
                          <span className={`text-[16px] font-segoe font-normal leading-[17px] text-center ${
                            selectedPayment === 'subscribe' ? 'text-button' : 'text-primary'
                          }`}>
                            $44.70 USD
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <img 
                        src="/images/img_svg_blue_gray_900.svg" 
                        alt="Info" 
                        className="w-[16px] h-[16px]"
                      />
                      <span className="text-[14px] font-segoe font-normal leading-[19px] text-center text-primary">
                        What is a Subscription?
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full mb-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[13px] font-segoe font-normal leading-[18px] text-primary">
                      SELECT QUANTITY
                    </span>
                    <div className="flex items-center gap-4 bg-[#f1b434] border border-secondary rounded-[22px] px-4 py-2">
                      <button 
                        onClick={() => handleQuantityChange(-1)}
                        className="text-[18px] font-segoe font-normal leading-[24px] tracking-[2px] uppercase text-button"
                      >
                        -
                      </button>
                      <span className="text-[16px] font-segoe font-normal leading-[22px] text-center text-button bg-[#f1b434] px-2 py-2 rounded">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(1)}
                        className="text-[18px] font-segoe font-normal leading-[24px] tracking-[2px] uppercase text-button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    size="large"
                    onClick={() => {}}
                    className="text-[15px] font-segoe font-normal leading-[20px] tracking-[1px] uppercase border border-[#313131] rounded-[22px] px-8 py-3"
                  >
                    Add to cart
                  </Button>
                </div>

                {/* Beauty Bundle */}
                <div className="w-full bg-[#f2f2f2] rounded-[24px] p-5 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-6 px-14">
                    <img 
                      src="/images/img_button_previous.svg" 
                      alt="Previous" 
                      className="w-[24px] h-[24px]"
                    />
                    <span className="text-[20px] font-segoe font-semibold leading-[27px] text-center text-primary">
                      Beauty Bundle
                    </span>
                    <img 
                      src="/images/img_button_next_slide.svg" 
                      alt="Next" 
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                      {/* UMF 20+ */}
                      <div className="flex flex-col items-center gap-2">
                        <img 
                          src="/images/img_image_94x94.png" 
                          alt="UMF 20+" 
                          className="w-[94px] h-[94px] rounded-[10px]"
                        />
                        <span className="text-[18px] font-segoe font-semibold leading-[24px] text-center text-primary">
                          UMF 20+
                        </span>
                        <Dropdown
                          placeholder="250g"
                          options={weightOptions}
                          value={selectedUMF20}
                          onChange={(option) => setSelectedUMF20(option?.value)}
                          fullWidth
                        />
                      </div>
                      
                      <div className="flex items-center justify-center py-8">
                        <span className="text-[18px] font-segoe font-semibold leading-[24px] text-center text-primary">
                          +
                        </span>
                      </div>
                      
                      {/* UMF 24+ */}
                      <div className="flex flex-col items-center gap-2">
                        <img 
                          src="/images/img_image_1.png" 
                          alt="UMF 24+" 
                          className="w-[94px] h-[94px] rounded-[10px]"
                        />
                        <span className="text-[18px] font-segoe font-semibold leading-[24px] text-center text-primary">
                          UMF 24+
                        </span>
                        <Dropdown
                          placeholder="250g"
                          options={weightOptions}
                          value={selectedUMF24}
                          onChange={(option) => setSelectedUMF24(option?.value)}
                          fullWidth
                        />
                      </div>
                      
                      <div className="flex items-center justify-center py-8">
                        <span className="text-[18px] font-segoe font-semibold leading-[24px] text-center text-primary">
                          +
                        </span>
                      </div>
                      
                      {/* Wooden Spoon */}
                      <div className="flex flex-col items-center gap-2">
                        <img 
                          src="/images/img_image_152.png" 
                          alt="Wooden Spoon" 
                          className="w-[94px] h-[94px] rounded-[10px]"
                        />
                        <span className="text-[18px] font-segoe font-semibold leading-[23px] text-center text-primary">
                          Wooden Spoon
                        </span>
                      </div>
                    </div>
                    
                    {/* Bundle Pricing */}
                    <div className="flex flex-col items-center gap-3 w-full lg:w-[42%]">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-segoe font-normal leading-[19px] text-center line-through text-primary">
                          $478.75 USD
                        </span>
                        <span className="text-[18px] font-segoe font-semibold leading-[24px] text-center text-primary">
                          $430.88 USD
                        </span>
                        <span className="text-[14px] font-segoe font-semibold leading-[19px] text-left text-[#087f1a]">
                          Save 10%
                        </span>
                      </div>
                      <Button 
                        variant="secondary" 
                        size="large"
                        fullWidth
                        onClick={() => {}}
                        className="text-[16px] font-segoe font-normal leading-[22px] tracking-[1px] uppercase border border-[#313131] rounded-[22px] px-8 py-2"
                      >
                        Add bundle to cart
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Rewards Program */}
                <div className="w-full mb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <img 
                      src="/images/img_colourclub_logo.png" 
                      alt="Colourclub logo" 
                      className="w-[40px] h-[38px] rounded-[18px]"
                    />
                    <span className="text-[14px] font-segoe font-normal leading-[19px] text-primary">
                      Colourclub members earn up to
                    </span>
                    <div className="bg-secondary rounded-[16px] px-2 py-1">
                      <span className="text-[18px] font-segoe font-normal leading-[24px] text-[#f39c12]">
                        56
                      </span>
                    </div>
                    <span className="text-[14px] font-segoe font-normal leading-[19px] text-primary">
                      reward points when buy this item.
                    </span>
                    <span className="text-[13px] font-segoe font-normal leading-[19px] text-primary">
                      Sign up or log in
                    </span>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="w-full mb-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[14px] font-segoe font-normal leading-[19px] tracking-[1px] uppercase text-primary">
                        Delivery
                      </span>
                      <span className="text-[14px] font-segoe font-normal leading-[19px] text-primary">
                        FREE DELIVERY ON ORDERS OVER $30
                      </span>
                    </div>
                    <span className="text-[13px] font-segoe font-normal leading-[18px] text-primary">
                      ESTIMATED DELIVERY DATE: Jun 9 - Jun 13 to
                    </span>
                  </div>
                </div>

                {/* After Pay */}
                <div className="w-full border-t border-[#313131] pt-4 mb-8">
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-[14px] font-segoe font-normal leading-[19px] tracking-[1px] uppercase text-primary">
                      After Pay
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[14px] font-segoe font-normal leading-[19px] text-primary">
                        or 4 interest-free payments of $13.97 with
                      </span>
                      <img 
                        src="/images/img_button_afterpay.svg" 
                        alt="Afterpay" 
                        className="w-[90px] h-[22px]"
                      />
                      <img 
                        src="/images/img_svg_gray_700.svg" 
                        alt="Info" 
                        className="w-[14px] h-[14px]"
                      />
                    </div>
                  </div>
                </div>

                {/* UMF Scale */}
                <div className="w-full border-t border-[#313131] pt-8 mb-6">
                  <span className="text-[14px] font-segoe font-normal leading-[19px] tracking-[1px] uppercase text-primary block mb-4">
                    UMF™ scale
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-1 mb-6">
                    <div className="px-2 py-1">
                      <span className="text-[13px] font-segoe font-normal leading-[18px] tracking-[1px] text-center text-primary">
                        UMF™ 10+
                      </span>
                    </div>
                    <div className="px-2 py-1">
                      <span className="text-[13px] font-segoe font-normal leading-[18px] tracking-[1px] text-center text-primary">
                        UMF™ 15+
                      </span>
                    </div>
                    <div className="px-2 py-1">
                      <span className="text-[13px] font-segoe font-normal leading-[19px] tracking-[1px] text-center text-primary">
                        UMF™ 20+
                      </span>
                    </div>
                    <div className="flex flex-col items-center px-2 py-1">
                      <span className="text-[13px] font-segoe font-normal leading-[19px] tracking-[1px] text-center text-[#830065]">
                        UMF™ 24+
                      </span>
                      <div className="w-[86px] h-[3px] bg-[#830065] mt-1"></div>
                    </div>
                    <div className="px-2 py-1">
                      <span className="text-[13px] font-segoe font-normal leading-[19px] tracking-[1px] text-center text-primary">
                        UMF™ 26+
                      </span>
                    </div>
                    <div className="px-2 py-1">
                      <span className="text-[13px] font-segoe font-normal leading-[19px] tracking-[1px] text-center text-primary">
                        UMF™ 28+
                      </span>
                    </div>
                    <div className="px-2 py-1">
                      <span className="text-[13px] font-segoe font-normal leading-[19px] tracking-[1px] text-center text-primary">
                        UMF™ 30+
                      </span>
                    </div>
                  </div>

                  {/* Taste Profile */}
                  <span className="text-[14px] font-segoe font-normal leading-[19px] tracking-[1px] uppercase text-primary block mb-7">
                    Taste Profile
                  </span>
                  
                  <div className="relative w-full bg-gradient-to-r from-[#e87722] via-[#830065] to-[#203e96] rounded-[1px] px-14 py-4 mb-2">
                    <div className="flex justify-center items-center">
                      <img 
                        src="/images/img_image_blue_gray_900.svg" 
                        alt="Taste indicator" 
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[13px] font-segoe font-normal leading-[19px] text-primary">
                      Clean & Intense
                    </span>
                    <span className="text-[13px] font-segoe font-normal leading-[18px] text-primary">
                      Bold & Intense
                    </span>
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

export default Product;
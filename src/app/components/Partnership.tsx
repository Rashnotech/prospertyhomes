import '../global.css'

const logos = [
    'https://prod-static-assets.amberstudent.com/images/partner-logos/schiller_uni.png',
    'https://prod-static-assets.amberstudent.com/images/partner-logos/westminster_uni.png',
    'https://prod-static-assets.amberstudent.com/images/partner-logos/Niagara_uni.png',
    'https://prod-static-assets.amberstudent.com/images/partner-logos/torrens_uni.png',
    'https://prod-static-assets.amberstudent.com/images/partner-logos/uws_uni.png',
]

export default function PartnershipLogos() {
  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">Our Partners</h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[120px] mx-4">
                <img src={logo} alt={`Partner logo ${index + 1}`} width={120} height='auto' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const staffMembers = [
  {
    name: 'Hisham Hussein',
    position: 'Head of Administrative',
    image: '/hisham_hussein.jpg',
    description: "With over 20 years of experience in real estate, John leads our team with passion and expertise.",
  },
  {
    name: 'Alena Bayram',
    position: 'Head of Marketing/Agent',
    image: '/alena_bayram.jpg',
    description: "Jane's innovative sales strategies have helped countless families find their dream homes.",
  },
  {
    name: 'Jocelyn Gonzales',
    position: 'Head of Property Management',
    image: '/jocelyn_gonzales.jpg',
    description: "Mike's deep knowledge of the local market ensures our clients get the best value for their investments.",
  },
  {
    name: 'Garth Jason David',
    position: 'Finance and Accounting',
    image: '/garth_jason.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },
   {
    name: 'Mua Nkalu Mzita',
    position: 'CEO/MD',
    image: '/mua_nkalu.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },
  {
    name: 'Ella Walter',
    position: 'Customer Service',
    image: '/ella_walter.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },
  {
    name: 'David Marlon',
    position: 'Investment Analysis / Development',
    image: '/david_marlon.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },
  {
    name: 'Isaac Hayes',
    position: 'Human Resources',
    image: '/isaac_hayes.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },
  {
    name: 'Ananya V Kim',
    position: 'Research and Analysis',
    image: '/annya_kim.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },
  {
    name: 'Fatima Hassan',
    position: 'IT and Technology',
    image: '/fatima_hassan.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },
  {
    name: 'Marvin Bright',
    position: 'Legal/Custodian',
    image: '/marvin_bright.jpg',
    description: "Sarah's dedication to client satisfaction has earned us a reputation for exceptional service.",
  },


]

const Staff = () => {
  const [show, setShow] = useState(4);

  const handleShowMore = () => {
    setShow(prev => prev + 2);
  }
  return (
    <section id="staff" className="py-20 bg-white">
      <div className="container-md mx-auto px-4 lg:px-12">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h2>
        <p></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((member, index) => (
            index < show && (<motion.div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className='object-cover object-top w-full h-full'
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-black text-sm mb-4">{member.position}</p>
              </div>
            </motion.div>)
          ))}
          {staffMembers.length > show && <div className="flex justify-center col-auto lg:col-span-4">
            <button
              onClick={handleShowMore}
              className="text-black hover:bg-black hover:text-white ring-2 ring-black px-6 py-3 rounded-lg"
            >
              Show More
            </button>
          </div> }
        </div>
      </div>
    </section>
  )
}

export default Staff


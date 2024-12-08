import { motion } from 'framer-motion'

const approvals = [
  { name: 'Department of Housing', logo: '/government.jpeg' },
  { name: 'Real Estate Commission', logo: '/parliament.jpeg' },
  { name: 'Planning Portal', logo: '/planning.jpeg' },
]

const GovernmentApproval = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-8 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Government Approved
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {approvals.map((approval, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href="https://www.gov.uk/council-housing">
                <img
                  src={approval.logo}
                  alt={`${approval.name} logo`}
                  width={150}
                  height={150}
                  className="mb-2"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GovernmentApproval

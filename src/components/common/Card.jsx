const Card = ({ children, className ="" }) => (
        <div className={`bg-white text-dark rounded-lg shadow-md h-50 p-4 ${className}`}>
          {children}
        </div>
)


export default Card
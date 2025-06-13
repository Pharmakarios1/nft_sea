import React from 'react'

const CustomCard = ({children,className}:{
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className} bg-white rounded-lg shadow-lg p-6`}>
        {children}
    </div>
  )
}

export default CustomCard
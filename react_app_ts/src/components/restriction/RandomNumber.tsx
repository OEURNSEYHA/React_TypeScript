// import React from 'react'

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never,
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never,
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

// type RandomNumberProps = {
//     value: number
//     isPositive?: boolean
//     isNegative? : boolean
//     isZero? : boolean
// }

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
} : RandomNumberProps) => {
 
return (

    // const a = {isPositive = value, isNegative = value} 

    <div>

        {value} {isPositive && "positive"} {isNegative && 'negative' } {}  
        {isZero && "Zero"}

      
    </div>
)
}


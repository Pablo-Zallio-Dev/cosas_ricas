
export interface AlertProps {
      text: string
}

export default function AlertFormInput( {text}: AlertProps ){
      return(
            <p className=" absolute -bottom-4.5 -py-1.5 normal-case tracking-normal text-xs font-inter text-pinkPrimary "> {text} </p>
      )
}

export default function TitleSection( {titleText, white}: {titleText: string, white?:boolean} ){
      return(
            <h2 className={`  pt-4 text-4xl md:text-5xl ${ white ?' text-bgWhite ' :' text-chocolate ' } font-medium font-cormorantGaramond `}> {titleText} </h2>
      )
}

export default function SubtitleSection( {subtitleText, gold}: { subtitleText: string, gold?: boolean } ){
      return(
            <p className={` font-inter text-xs uppercase tracking-[3.6px] ${ gold ?' text-gold ' :' text-pinkPrimary' } `}> {subtitleText} </p>
      )
}
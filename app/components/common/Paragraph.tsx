
export type ParagraphSize = 'textCard' | 'textSection' | 'textSectionCenter' | 'textSectionLight' | 'textLarge'

const textSizeParagraph: Record<ParagraphSize, string> = {
      textCard: 'text-sm font-inter text-paragraph leading-6',
      textSection: ' mt-6 text-base font-inter text-paragraph leading-7',
      textSectionCenter: ' mt-6 text-base text-center font-inter text-paragraph leading-7',
      textSectionLight: ' mt-6 text-base text-border font-inter  leading-7',
      textLarge: ' mt-6 text-lg font-inter text-paragraph leading-7'
}

export type ParagraphProps ={
      textParagraph: string,
      textSize: ParagraphSize,
      center?: boolean,
      className?: string
}

export default function Paragraph( {textParagraph, textSize, center, className}: ParagraphProps ){
      return(
            <p className={` ${ textSizeParagraph[textSize]} ${center ?' text-center' : ''} ${className} `}>{textParagraph}</p>
      )
}
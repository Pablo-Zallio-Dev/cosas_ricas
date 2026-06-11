
export type ParagraphSize = 'textCard' | 'textSection' | 'textLarge'

const textSizeParagraph: Record<ParagraphSize, string> = {
      textCard: 'text-sm font-inter text-paragraph leading-7',
      textSection: ' mt-6 text-base font-inter text-paragraph leading-7',
      textLarge: ' mt-6 text-lg font-inter text-paragraph leading-7'
}

export type ParagraphProps ={
      textParagraph: string,
      textSize: ParagraphSize
}

export default function Paragraph( {textParagraph, textSize}: ParagraphProps ){
      return(
            <p className={` ${ textSizeParagraph[textSize]}  `}>{textParagraph}</p>
      )
}
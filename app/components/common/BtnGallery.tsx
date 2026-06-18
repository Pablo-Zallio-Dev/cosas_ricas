
export default function BtnGallery({ textBtn, onClick, activeCategory, cat }: {
      textBtn: string,
      onClick?: () => void,
      activeCategory?: string,
      cat?: string
}) {



      return (
            <button
                  onClick={onClick}
                  className={`  w-max py-2 px-4 
                  text-chocolate font-medium 
                  rounded-full 
                 
                  
                  ${activeCategory === cat
                              ? "bg-pinkPrimary text-cream  "
                              : "bg-bgWhite  border border-border  md:hover:bg-cream md:hover:border-gold md:transition-colors "
                        }
       `}
            >
                  {textBtn}
            </button>
      )
}
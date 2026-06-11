export default function BtnGallery({ textBtn, isActive, onClick }: { 
  textBtn: string
  isActive: boolean
  onClick: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={`  w-max py-2 px-4 
                  text-chocolate font-medium 
                  rounded-full 
                  md:hover:bg-cream
                  border border-border md:hover:border-gold
                  md:transition-colors
        ${isActive 
          ?  'bg-pinkPrimary text-cream md:hover:bg-pinkPrimary' 
          : ''
        }`}
    >
      {textBtn}
    </button>
  )
}
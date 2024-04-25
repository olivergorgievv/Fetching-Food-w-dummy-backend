
export default function Button({ children, textOnly, onClick, className, ...props }) {
 let cssClasses = textOnly ? `text-button` : `button`;
 cssClasses += ' ' + className;
  return (
    <button {...props} onClick={onClick} className={cssClasses}>{children}</button>
  )
}

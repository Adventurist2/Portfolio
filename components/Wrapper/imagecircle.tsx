export function ImageCircle({children}:{children:string}){
    return <div className="w-14 h-14 rounded-full overflow-hidden border-2">
    <img src={children} alt="Image" className="w-full h-full object-cover" />
</div>
}
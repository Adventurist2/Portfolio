// ImageCircle.tsx
import Image from "next/image";
export function ImageCircle({ imageLink }: { imageLink: string }) {
    return (
        <div className="w-14 h-14 rounded-full overflow-hidden border-2">
            <Image
                src={imageLink}
                alt="Image"
                width={56} // 14 * 4 = 56px (same as w-14)
                height={56} // 14 * 4 = 56px (same as h-14)
                className="w-full h-full object-cover"
            />
        </div>
    );
}

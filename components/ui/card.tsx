// Card.tsx
import { ImageCircle } from "../Wrapper/imagecircle"; // Ensure the file path is correct

type CardType = {
    index: number;
    title: string;
    description: string;
    imageLink: string;
    username: string;
}

export function Card({ index, title, description, imageLink, username }: CardType) {
    return (
        <div
            className="items cursor-pointer p-6 w-80 h-40 border rounded-lg shadow-md transparent text-white hover:bg-amber-300"
            style={{ '--position': String(index) } as React.CSSProperties}
        >
            <div className="flex items-center space-x-2">
                <ImageCircle imageLink={imageLink} /> {/* Pass imageLink prop correctly */}
                <div>
                    <h2 className="text-md font-semibold text-gray-800">{title}</h2> {/* Use title properly */}
                    <p className="text-sm text-gray-600">{username}</p> {/* Use username properly */}
                </div>
            </div>
            <p className="mt-4 text-gray-600 text-sm overflow-clip">{description}</p>
        </div>
    );
}

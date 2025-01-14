import { Card } from "./ui/card"; // Ensure the path to `Card` is correct

const ImageLink = "/assests/4058273.png";


const list = [
    {
        title: "This is Title",
        description: "lorem laflafjlajflajfalfjaljfalfalsfalsfj;lafjlasdfjasldjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjf",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "This is Title",
        description: "lorem laflafjlajflajfalfjaljfalfalsfalsfj;lafjlasdfjasldjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjf",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "This is Title",
        description: "lorem laflafjlajflajfalfjaljfalfalsfalsfj;lafjlasdfjasldjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjf",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "This is Title",
        description: "lorem laflafjlajflajfalfjaljfalfalsfalsfj;lafjlasdfjasldjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjf",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "This is Title",
        description: "lorem laflafjlajflajfalfjaljfalfalsfalsfj;lafjlasdfjasldjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjf",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "This is Title",
        description: "lorem laflafjlajflajfalfjaljfalfalsfalsfj;lafjlasdfjasldjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjf",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
];

export default function Infinite() {
    return (
        <div>
            <div className="slider w-screen overflow-hidden h-60"
        style={{ '--quantity': list.length } as React.CSSProperties}
        >
            <div className="flex m-5 list">
                {list.map((item, index) => (
                    <Card
                        key={index} 
                        index = {index}
                        title={item.title}
                        description={item.description}
                        imageLink={item.imageLink}
                        username={item.username}
                    />
                ))}
            </div>
        </div>
        <div 
        className="slider w-screen overflow-hidden h-60"
        data-reverse={"true"}
        style={{ '--quantity': list.length } as React.CSSProperties}
        >
            <div className="flex m-5 list">
                {list.map((item, index) => (
                    <Card
                        key={index} 
                        index = {index}
                        title={item.title}
                        description={item.description}
                        imageLink={item.imageLink}
                        username={item.username}
                    />
                ))}
            </div>
        </div>

        </div>
        
    );
}
